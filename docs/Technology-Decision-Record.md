# Technology Decision Record (TDR)

## Purpose

This document explains the technology choices made while developing the Page Pulse API.

---

## 1. Node.js

### Decision
Node.js was selected as the runtime environment.

### Reason
- Efficient for I/O-intensive applications.
- Handles multiple requests asynchronously.
- Large ecosystem with npm packages.
- Well suited for REST APIs.

---

## 2. Express.js

### Decision
Express.js was selected as the web framework.

### Reason
- Lightweight and easy to use.
- Supports middleware architecture.
- Simplifies routing and request handling.
- Widely adopted in production applications.

---

## 3. Axios

### Decision
Axios was chosen to fetch website data.

### Reason
- Promise-based HTTP client.
- Built-in timeout support.
- Automatic redirect handling.
- Easy error handling.

---

## 4. Cheerio

### Decision
Cheerio was selected for HTML parsing.

### Reason
- Fast and lightweight.
- jQuery-like syntax.
- Easy extraction of page metadata such as title and other HTML elements.

---

## 5. NodeCache

### Decision
NodeCache was used for in-memory caching.

### Reason
- Reduces repeated requests to the same website.
- Improves response time.
- Decreases unnecessary network traffic.
- Supports configurable cache expiration.

---

## 6. Joi

### Decision
Joi was selected for request validation.

### Reason
- Validates user input before processing.
- Produces consistent validation errors.
- Prevents invalid requests from reaching the service layer.

---

## 7. Pino

### Decision
Pino was selected for logging.

### Reason
- High-performance structured logging.
- Easy integration with Express using pino-http.
- Useful for debugging and monitoring production applications.

---

## 8. Docker

### Decision
Docker was used for containerization.

### Reason
- Ensures a consistent runtime environment.
- Simplifies deployment.
- Improves portability across systems.

---

## Conclusion

The selected technologies provide a lightweight, maintainable, and production-ready solution. Together they support scalability, reliability, and ease of deployment while keeping the application simple to understand and extend.