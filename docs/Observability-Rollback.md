# Observability & Rollback Plan

## Purpose

This document describes how the Page Pulse API can be monitored in production and how deployments can be safely rolled back if problems occur.

---

# Observability Plan

## Logging

The application uses Pino and pino-http to generate structured logs.

Each request includes:
- Request ID
- HTTP Method
- URL
- Status Code
- Response Time
- Error Information (if applicable)

This helps trace requests and diagnose issues.

---

## Health Check

The API exposes a health endpoint:

GET /

A successful response confirms that the application is running.

---

## Error Monitoring

The global error handler captures unexpected exceptions and returns consistent JSON error responses.

Errors are logged with:
- Request ID
- Error Message
- Status Code

---

## Performance Monitoring

The audit service measures website response time.

This helps identify:
- Slow target websites
- Timeout issues
- Performance bottlenecks

---

# Rollback Plan

If a deployment introduces unexpected issues:

1. Identify the faulty deployment.
2. Roll back to the last stable version using Git.
3. Redeploy the previous working version to Render.
4. Verify that the health endpoint is responding correctly.
5. Monitor application logs for any remaining issues.

---

## Conclusion

Structured logging, health checks, and a defined rollback process improve the reliability and maintainability of the Page Pulse API in a production environment.