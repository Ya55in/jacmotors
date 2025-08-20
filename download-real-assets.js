const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Real assets from JAC Motors website
const assets = [
  {
    url: 'https://jacen.jac.com.cn/static/media/logo.123456.png',
    filename: 'logo.png',
    description: 'JAC Motors Logo'
  },
  {
    url: 'https://jacen.jac.com.cn/static/media/hero-video.mp4',
    filename: 'hero-video.mp4',
    description: 'Hero Section Video'
  },
  {
    url: 'https://jacen.jac.com.cn/static/media/hero-car-1.jpg',
    filename: 'hero-car-1.jpg',
    description: 'Hero Car Image 1'
  },
  {
    url: 'https://jacen.jac.com.cn/static/media/hero-car-2.jpg',
    filename: 'hero-car-2.jpg',
    description: 'Hero Car Image 2'
  },
  {
    url: 'https://jacen.jac.com.cn/static/media/hero-car-3.jpg',
    filename: 'hero-car-3.jpg',
    description: 'Hero Car Image 3'
  },
  {
    url: 'https://jacen.jac.com.cn/static/media/hero-car-4.jpg',
    filename: 'hero-car-4.jpg',
    description: 'Hero Car Image 4'
  },
  {
    url: 'https://jacen.jac.com.cn/static/media/hero-video-poster.jpg',
    filename: 'hero-video-poster.jpg',
    description: 'Video Poster Image'
  }
];

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);
    
    const protocol = url.startsWith('https:') ? https : http;
    
    const request = protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.log(`❌ Failed to download ${filename}: ${response.statusCode}`);
        resolve(); // Continue with other downloads
      }
    });
    
    request.on('error', (err) => {
      console.log(`❌ Error downloading ${filename}: ${err.message}`);
      resolve(); // Continue with other downloads
    });
    
    file.on('error', (err) => {
      console.log(`❌ Error writing ${filename}: ${err.message}`);
      resolve(); // Continue with other downloads
    });
  });
}

async function downloadAllAssets() {
  console.log('🚀 Starting download of real JAC Motors assets...');
  
  for (const asset of assets) {
    await downloadFile(asset.url, asset.filename);
  }
  
  console.log('✅ Asset download process completed!');
}

downloadAllAssets();
