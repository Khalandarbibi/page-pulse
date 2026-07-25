const axios = require("axios");
const cheerio = require("cheerio");

const auditWebsite = async (url) => {
    const startTime = Date.now();

    const response = await axios.get(url, {
        timeout: 10000,
        maxRedirects: 5,
        validateStatus: () => true
    });

    const responseTime = Date.now() - startTime;

    const $ = cheerio.load(response.data);

    return {
        url,
        statusCode: response.status,
        responseTime,
        title: $("title").text() || "No title found",
        contentType: response.headers["content-type"] || "Unknown",
        contentLength: response.headers["content-length"] || "Unknown",
        server: response.headers["server"] || "Unknown",
        timestamp: new Date().toISOString()
    };
};

module.exports = {
    auditWebsite
};