# Page Pulse Architecture

## Overview

The client sends a POST request to the Express API.

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

Cache Check

↓

Axios Request

↓

Cheerio HTML Parsing

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

## Components

- Express Server
- Validation Middleware
- Rate Limiter
- Cache Service
- Audit Service
- Logging
- Docker
- GitHub Actions
- Render Deployment

---

## Deployment

GitHub

↓

GitHub Actions

↓

Render

↓

Public REST API