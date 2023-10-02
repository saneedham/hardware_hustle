"use strict";

const puppeteer = require("puppeteer");

const makePdf = async (url, outputPath, format) => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  await page.pdf({
    printBackground: true,
    path: outputPath,
    format,
  });

  await browser.close();
};

const [, , url, outputPath] = process.argv;

makePdf(url, outputPath, "letter");
