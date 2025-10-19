#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Next.js build with manifest copying...');

try {
  // 1. Run Next.js build with linting disabled
  console.log('📦 Building Next.js application...');
  execSync('npx next build --no-lint', { stdio: 'inherit' });

  // 2. Copy manifest files to output directory
  console.log('📋 Copying manifest files for Vercel deployment...');
  copyManifestFiles();

  console.log('✅ Build completed successfully with manifest files!');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function copyManifestFiles() {
  try {
    const sourceDir = path.join(process.cwd(), '.next');
    const outputDir = path.join(process.cwd(), 'out');

    // Files to copy
    const manifestFiles = [
      'routes-manifest.json',
      'app-build-manifest.json',
      'react-loadable-manifest.json',
      'build-manifest.json'
    ];

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    let copiedCount = 0;

    // Copy each manifest file if it exists
    manifestFiles.forEach(file => {
      const sourcePath = path.join(sourceDir, file);
      const outputPath = path.join(outputDir, file);

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, outputPath);
        console.log(`  ✅ Copied ${file}`);
        copiedCount++;
      } else {
        console.log(`  ⚠️  ${file} not found in .next/ directory`);
      }
    });

    // Verify routes-manifest.json was copied (critical for Vercel)
    const routesManifestPath = path.join(outputDir, 'routes-manifest.json');
    if (fs.existsSync(routesManifestPath)) {
      console.log(`  🎯 Critical file routes-manifest.json successfully copied!`);
    } else {
      console.error(`  ❌ ERROR: routes-manifest.json not found after copying!`);
      throw new Error('routes-manifest.json is required for Vercel deployment');
    }

    console.log(`📊 Copied ${copiedCount} manifest files to output directory`);

    // List contents of output directory for verification
    console.log('\n📁 Output directory contents:');
    const outputFiles = fs.readdirSync(outputDir);
    outputFiles.forEach(file => {
      if (file.endsWith('.json')) {
        console.log(`  📄 ${file}`);
      }
    });

  } catch (error) {
    console.error('❌ Error copying manifest files:', error);
    throw error;
  }
}