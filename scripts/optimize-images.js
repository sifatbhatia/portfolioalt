const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/webp');
const outputDir = path.join(__dirname, '../public/optimized-webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Maximum width for different screen sizes
const maxWidths = [
  { suffix: '-small', width: 640 },
  { suffix: '-medium', width: 1024 },
  { suffix: '-large', width: 1440 },
  { suffix: '-xlarge', width: 1920 }
];

async function optimizeImage(file) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const name = path.basename(file, ext);

  try {
    // Process each size variant
    for (const { suffix, width } of maxWidths) {
      const outputPath = path.join(outputDir, `${name}${suffix}.webp`);
      
      await sharp(inputPath)
        .resize({
          width,
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({
          quality: 80,
          effort: 6
        })
        .toFile(outputPath);
      
      const stats = await sharp(outputPath).stats();
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      
      console.log(`Created: ${path.basename(outputPath)}`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
      console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(2)} KB`);
      console.log(`  Savings: ${((1 - optimizedSize / originalSize) * 100).toFixed(2)}%`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
}

async function processImages() {
  try {
    const files = fs.readdirSync(inputDir).filter(file => 
      ['.webp', '.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())
    );

    for (const file of files) {
      console.log(`\nProcessing: ${file}`);
      await optimizeImage(file);
    }
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

processImages();
