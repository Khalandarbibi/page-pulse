# Page Pulse Architecture

## Overview

Page Pulse is a RESTful API built with Node.js and Express.js that audits websites by fetching their content and extracting useful metadata such as the page title, HTTP status code, response time, content type, content length, and server information.

The application follows a layered architecture where each component has a single responsibility. This makes the application modular, maintainable, and easy to test.

The application also includes request validation, request IDs, structured logging, caching, request timeouts, concurrency limits, and rate limiting to improve reliability and performance.

---

## System Architecture

Client

↓

Express API

↓

Joi Validation

↓

Rate Limiter

↓

Request ID Middleware

↓

Pino Logger

↓

Audit Controller

↓

Audit Service

↓

Cache Check

↓

Axios HTTP Request

↓

Cheerio HTML Parser

↓

JSON Response

---

## Folder Structure

src/
├── controllers/
├── middleware/
├── routes/
├── services/
├── logger/
├── config/
├── utils/
├── app.js
└── server.js

---

## Main Components

### Express Server

Handles incoming HTTP requests and routes them to the appropriate controller.

### Validation

Uses Joi to validate the request body before processing.

### Rate Limiter

Limits the number of requests from a client to protect the API from abuse.

### Request ID Middleware

Generates a unique request ID for every request, making logs easier to trace.

### Logger

Uses Pino and pino-http for structured logging of incoming requests and application errors.

### Audit Service

Fetches website data using Axios, measures response time, parses HTML using Cheerio, and returns metadata.

### Cache Service

Stores recent audit results in memory using NodeCache to reduce repeated external requests.

### Error Handler

Provides consistent JSON error responses and logs errors centrally.

---

## Request Flow

1. Client sends a POST request to `/api/v1/audit`.
2. Request validation verifies the submitted URL.
3. Rate limiting checks whether the client has exceeded the request limit.
4. A unique Request ID is assigned.
5. Request information is logged.
6. The controller forwards the request to the audit service.
7. The audit service checks the cache.
8. If cached data exists, it is returned immediately.
9. Otherwise, Axios fetches the target website.
10. Cheerio extracts metadata from the HTML.
11. The result is cached.
12. A JSON response is returned to the client.
13. Errors are handled by the global error handler.

---

## Deployment

GitHub

↓

GitHub Actions

↓

Render

↓

Public REST API