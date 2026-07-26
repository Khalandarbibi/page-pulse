const axios = require("axios");
const cheerio = require("cheerio");
const cache = require("./cache.service");
const pLimit = require("p-limit");
const limit = pLimit(10);

const auditWebsite = async (url) => {
    // Check cache first
    const cachedData = cache.get(url);

    if (cachedData) {
        return {
            ...cachedData,
            cached: true
        };
    }

    const startTime = Date.now();

    const response = await limit(() =>
    axios.get(url, {
        timeout: Number(process.env.REQUEST_TIMEOUT) || 10000,
        maxRedirects: 5,
        validateStatus: () => true
    })
);

    const responseTime = Date.now() - startTime;

    const $ = cheerio.load(response.data);

    const result = {
        url,
        statusCode: response.status,
        responseTime,
        title: $("title").text() || "No title found",
        contentType: response.headers["content-type"] || "Unknown",
        contentLength: response.headers["content-length"] || "Unknown",
        server: response.headers["server"] || "Unknown",
        timestamp: new Date().toISOString()
    };

    // Save in cache
    cache.set(url, result);

    return {
        ...result,
        cached: false
    };
};

module.exports = {
    auditWebsite
};