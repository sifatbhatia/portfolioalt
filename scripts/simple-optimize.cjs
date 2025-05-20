const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = path.join(__dirname, '../public/webp');
const outputDir = path.join(__dirname, '../public/optimized-webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
  console.log('Using sharp for image optimization');
} catch (e) {
  console.log('sharp not found, using basic file operations');
}

// Get all image files
const files = fs.readdirSync(inputDir).filter(file => 
  ['.webp', '.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())
);

console.log(`Found ${files.length} images to process`);

async function processImage(file) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const name = path.basename(file, ext);
  const outputPath = path.join(outputDir, file);

  try {
    if (sharp) {
      // Use sharp if available
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
    } else {
      // Fallback: just copy the file
      fs.copyFileSync(inputPath, outputPath);
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    
    console.log(`\nProcessed: ${file}`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`  Savings: ${((1 - optimizedSize / originalSize) * 100).toFixed(2)}%`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

// Process all images
async function processAll() {
  for (const file of files) {
    await processImage(file);
  }
  console.log('\nImage optimization complete!');
}

processAll();
