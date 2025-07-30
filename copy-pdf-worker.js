const fs = require("fs");
const path = require("path");

// Copy PDF.js worker file to public directory
const srcWorker = path.join(
  __dirname,
  "node_modules",
  "pdfjs-dist",
  "build",
  "pdf.worker.min.js"
);
const destWorker = path.join(__dirname, "public", "pdf.worker.min.js");

try {
  // Ensure public directory exists
  if (!fs.existsSync(path.join(__dirname, "public"))) {
    fs.mkdirSync(path.join(__dirname, "public"), { recursive: true });
  }

  // Copy worker file if source exists
  if (fs.existsSync(srcWorker)) {
    fs.copyFileSync(srcWorker, destWorker);
    console.log("PDF.js worker file copied successfully");
  } else {
    console.warn("PDF.js worker file not found, skipping copy");
  }
} catch (error) {
  console.warn("Could not copy PDF.js worker file:", error.message);
  // Don't fail the build if worker copy fails
  process.exit(0);
}
