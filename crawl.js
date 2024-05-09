const axios = require('axios');
const { JSDOM } = require('jsdom');

// Function to fetch and parse the sitemap from its URL
async function fetchSitemap(sitemapUrl) {
    try {
        const response = await axios.get(sitemapUrl);
        const sitemap = response.data;
        const dom = new JSDOM(sitemap);
        const urls = Array.from(dom.window.document.querySelectorAll('url loc'))
            .map(node => node.textContent.trim());
        return urls;
    } catch (error) {
        console.error(`Error fetching sitemap from ${sitemapUrl}: ${error.message}`);
        return [];
    }
}

// Function to crawl each URL and check for a specific DOM element
async function crawlSite(urls, elementSelector) {
    const notFoundUrls = [];
    for (const url of urls) {
        try {
            console.log(`Crawling ${url}...`);
            const response = await axios.get(url);
            console.log(`Received response from ${url}`);
            const html = response.data;
            const dom = new JSDOM(html);
            const element = dom.window.document.querySelector(elementSelector);
            if (element) {
                console.log(`Page ${url} contains the element ${elementSelector}`);
            } else {
                console.log(`Page ${url} does not contain the element ${elementSelector}`);
                notFoundUrls.push(url);
            }
        } catch (error) {
            console.error(`Error crawling ${url}: ${error.message}`);
        }
    }
    console.log('Crawl completed.');
    if (notFoundUrls.length > 0) {
        console.log('The following pages do not contain the element:');
        notFoundUrls.forEach(url => console.log(url));
    } else {
        console.log('All pages contain the element.');
    }
}

// Usage
const sitemapUrl = 'http://localhost:8080/sitemap.xml'; // Replace with the URL of your sitemap
const elementSelector = 'div.header-banner-component'; // Change this to the selector of the DOM element you want to check for
fetchSitemap(sitemapUrl)
    .then(urls => crawlSite(urls, elementSelector))
    .catch(error => console.error(error));