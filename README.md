# Page Pulse API

**Built for Digital Heroes Training Task**

Page Pulse is a production-ready REST API built with **Node.js** and **Express.js** that audits websites and returns useful metadata such as HTTP status, response time, page title, content type, server information, and content length. The API includes validation, caching, rate limiting, request logging, request tracing, Docker support, automated testing, and CI/CD.

---

## Live Demo

**Render Deployment**

https://page-pulse-pwog.onrender.com

---

## GitHub Repository

https://github.com/Khalandarbibi/page-pulse

---

#  Features

- Website URL auditing
- HTML Title extraction
- HTTP Status Code detection
- Response Time measurement
- Content-Type detection
- Content-Length detection
- Server header detection
- Request validation using Joi
- Configurable request timeout
- In-memory caching with configurable cache TTL
- Concurrency limiting
- Rate limiting
- Structured logging using Pino
- Unique Request IDs for every request
- Global error handling
- Docker containerization
- Unit and integration testing with Jest & Supertest
- GitHub Actions CI/CD
- Live deployment on Render

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Libraries

- Axios
- Cheerio
- Joi
- NodeCache
- Pino
- pino-http
- express-rate-limit
- p-limit
- UUID / crypto

### Testing

- Jest
- Supertest

### DevOps

- Docker
- GitHub Actions
- Render

---

#  Project Structure

```
page-pulse/
│
├── docs/
│   ├── Architecture.md
│   ├── Architecture-Diagram.md
│   ├── Technology-Decision-Record.md
│   ├── Failure-Mode-Analysis.md
│   ├── Observability-Rollback.md
│   └── AI-Usage.md
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── logger/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── tests/
├── .github/
├── Dockerfile
├── package.json
├── README.md
└── .env.example
```

---

#  Installation

Clone the repository

```bash
git clone https://github.com/Khalandarbibi/page-pulse.git
```

Move into the project

```bash
cd page-pulse
```

Install dependencies

```bash
npm install
```

---

#  Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000
CACHE_TTL=300
REQUEST_TIMEOUT=10000
NODE_ENV=development
```

---

#  Run the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# Run Tests

```bash
npm test
```

---

#  Docker

Build the Docker image

```bash
docker build -t page-pulse .
```

Run the container

```bash
docker run -p 3000:3000 page-pulse
```

---

#  API Endpoint

## Audit Website

**POST**

```
/api/v1/audit
```

### Request Body

```json
{
    "url": "https://example.com"
}
```

---

## Successful Response

```json
{
    "success": true,
    "requestId": "c83fef70-71b8-4efb-a809-4dd1dbe4fa5b",
    "data": {
        "url": "https://example.com",
        "statusCode": 200,
        "responseTime": 145,
        "title": "Example Domain",
        "contentType": "text/html",
        "contentLength": "1256",
        "server": "nginx",
        "cached": false
    }
}
```

---

## Error Response

```json
{
    "success": false,
    "requestId": "c83fef70-71b8-4efb-a809-4dd1dbe4fa5b",
    "statusCode": 500,
    "message": "Website audit failed"
}
```

---

#  Documentation

Additional documentation is available in the `docs` folder.

- Architecture Document
- Architecture Diagram
- Technology Decision Record (TDR)
- Failure Mode Analysis
- Observability & Rollback Plan
- AI Usage Statement

---

#  CI/CD

This project uses **GitHub Actions** for Continuous Integration.

The workflow automatically:

- Installs dependencies
- Runs tests
- Verifies the build

---

#  Deployment

The application is deployed on **Render**.

Live URL:

https://page-pulse-pwog.onrender.com

---

#  Production Features

- Request validation
- Structured logging
- Request tracing
- Centralized error handling
- Configurable timeout
- Configurable cache TTL
- Concurrency limiting
- Rate limiting
- Docker support
- Automated testing
- CI/CD pipeline

---

#  AI Usage

Artificial Intelligence tools were used as a development aid for:

- Understanding requirements
- Reviewing code
- Improving documentation
- Identifying best practices

All implementation, testing, debugging, deployment, and final verification were reviewed and validated before submission.

---

#  Author

**Khalandar Bibi**

Computer Science Engineering Graduate

---

#  License

This project is licensed under the **MIT License**.

---

## Digital Heroes Training Task

This project was developed as part of the **Digital Heroes Software Development Qualification Task**.

https://digitalheroesco.com