#!/usr/bin/env node

/**
 * Deployment preparation script for cPanel upload
 * This script prepares the project for cPanel hosting
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Preparing Perpetual Help Medical Center for cPanel deployment...\n');

try {
    // Step 1: Clean previous build
    console.log('📁 Cleaning previous build...');
    if (fs.existsSync('dist')) {
        fs.rmSync('dist', { recursive: true });
        console.log('✅ Previous build cleaned');
    }

    // Step 2: Install dependencies
    console.log('\n📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');

    // Step 3: Build for production
    console.log('\n🔨 Building for production...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Production build completed');

    // Step 4: Copy .htaccess to dist
    console.log('\n📋 Copying .htaccess to dist folder...');
    const htaccessSource = path.join('public', '.htaccess');
    const htaccessDest = path.join('dist', '.htaccess');
    
    if (fs.existsSync(htaccessSource)) {
        fs.copyFileSync(htaccessSource, htaccessDest);
        console.log('✅ .htaccess copied to dist folder');
    }

    // Step 5: Create favicon files if they don't exist
    console.log('\n🖼️  Checking favicon files...');
    const distDir = 'dist';
    const faviconFiles = ['favicon.svg', 'favicon.png', 'apple-touch-icon.png'];
    
    faviconFiles.forEach(file => {
        const filePath = path.join(distDir, file);
        if (!fs.existsSync(filePath)) {
            // Create a simple SVG favicon as placeholder
            if (file === 'favicon.svg') {
                const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#0066cc"/>
  <text x="50" y="60" font-family="Arial" font-size="40" fill="white" text-anchor="middle">H</text>
</svg>`;
                fs.writeFileSync(filePath, svgContent);
                console.log(`✅ Created ${file}`);
            }
        }
    });

    // Step 6: Verify build structure
    console.log('\n🔍 Verifying build structure...');
    const requiredFiles = ['index.html', '.htaccess'];
    const requiredDirs = ['assets'];
    
    let allGood = true;
    
    requiredFiles.forEach(file => {
        const filePath = path.join('dist', file);
        if (!fs.existsSync(filePath)) {
            console.log(`❌ Missing required file: ${file}`);
            allGood = false;
        } else {
            console.log(`✅ Found: ${file}`);
        }
    });
    
    requiredDirs.forEach(dir => {
        const dirPath = path.join('dist', dir);
        if (!fs.existsSync(dirPath)) {
            console.log(`❌ Missing required directory: ${dir}`);
            allGood = false;
        } else {
            console.log(`✅ Found: ${dir}/`);
        }
    });

    if (allGood) {
        console.log('\n🎉 Build verification successful!');
        
        // Step 7: Display final instructions
        console.log('\n📋 DEPLOYMENT INSTRUCTIONS:');
        console.log('═══════════════════════════════════════');
        console.log('1. Open your cPanel File Manager');
        console.log('2. Navigate to public_html directory');
        console.log('3. Delete any existing files in public_html');
        console.log('4. Upload ALL contents from the "dist" folder to public_html');
        console.log('5. Ensure .htaccess is uploaded and visible');
        console.log('6. Test your website!');
        console.log('\n📁 Files to upload are in the "dist" folder');
        console.log('🌐 Your website will be ready at your domain!');
        
        // Display file count
        const distFiles = fs.readdirSync('dist', { recursive: true });
        console.log(`\n📊 Total files to upload: ${distFiles.length}`);
        
    } else {
        console.log('\n❌ Build verification failed. Please check the errors above.');
        process.exit(1);
    }

} catch (error) {
    console.error('\n❌ Deployment preparation failed:', error.message);
    process.exit(1);
}