# 🚀 Page Pulse API

Page Pulse is a REST API that audits websites and returns useful information such as response status, response time, page title, server details, and content type.

## Live Demo

https://page-pulse-pwog.onrender.com

## GitHub Repository

https://github.com/Khalandarbibi/page-pulse

---

## Features

- URL Health Audit
- HTML Title Extraction
- Response Time Measurement
- Content-Type Detection
- Server Information
- Request Validation using Joi
- Global Error Handling
- Request Logging with Pino
- UUID Request IDs
- Response Caching
- Rate Limiting
- Docker Support
- Unit Testing with Jest
- CI/CD using GitHub Actions
- Render Deployment

---

## Tech Stack

- Node.js
- Express.js
- Axios
- Cheerio
- Joi
- Pino
- Node Cache
- Jest
- Supertest
- Docker

---

## Installation

```bash
git clone https://github.com/Khalandarbibi/page-pulse.git

cd page-pulse

npm install

npm run dev
```

---

## Run Tests

```bash
npm test
```

---

## Docker

```bash
docker build -t page-pulse .

docker run -p 3000:3000 page-pulse
```

---

## API Endpoint

### POST

```
/api/v1/audit
```

Body

```json
{
  "url":"https://example.com"
}
```

Example Response

```json
{
  "success": true,
  "requestId": "...",
  "data": {
    "url": "https://example.com",
    "statusCode": 200,
    "responseTime": 350,
    "title": "Example Domain",
    "cached": false
  }
}
```

---

## Author

Khalandar Bibi