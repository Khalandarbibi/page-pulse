# Failure Mode Analysis

## Purpose

This document identifies potential failure scenarios in the Page Pulse API and describes how the application handles them.

---

## 1. Invalid URL

### Failure

The client submits an invalid or malformed URL.

### Handling

- Joi validates the request before processing.
- The API returns a structured validation error.
- The request does not reach the service layer.

---

## 2. Website Timeout

### Failure

The target website does not respond within the configured timeout.

### Handling

- Axios uses a configurable timeout.
- The request is terminated automatically.
- A structured error response is returned.

---

## 3. Website Unavailable

### Failure

The target website is offline or DNS resolution fails.

### Handling

- Axios throws an error.
- The global error handler catches the exception.
- The client receives an appropriate error response.

---

## 4. Cache Miss

### Failure

No cached audit result exists.

### Handling

- The audit service fetches fresh data.
- The new result is stored in NodeCache.

---

## 5. Cache Expiration

### Failure

The cached data has expired.

### Handling

- NodeCache automatically removes expired entries.
- A fresh audit is performed.

---

## 6. Too Many Requests

### Failure

A client exceeds the allowed request limit.

### Handling

- Express Rate Limiter blocks additional requests.
- HTTP 429 (Too Many Requests) is returned.

---

## 7. Concurrent Requests

### Failure

Many audit requests arrive simultaneously.

### Handling

- p-limit restricts the number of concurrent website audits.
- Additional requests wait in the queue until a slot becomes available.

---

## 8. Unexpected Server Error

### Failure

An unexpected exception occurs.

### Handling

- The global error handler catches the error.
- The error is logged using Pino.
- A structured JSON error response is returned.

---

## Summary

The application includes multiple layers of protection including validation, timeout handling, caching, concurrency control, rate limiting, and centralized error handling. These mechanisms improve reliability and help maintain stable operation under different failure conditions.