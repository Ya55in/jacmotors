const fs = require('fs');
const path = require('path');

// Create SVG placeholders
const createSVG = (width, height, text, bgColor = '#1f2937', textColor = '#ffffff') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
};

// Create images directory
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create placeholder images
const placeholders = [
  {
    filename: 'logo.png',
    width: 320,
    height: 80,
    text: 'JAC MOTORS',
    bgColor: '#ffffff',
    textColor: '#1f2937'
  },
  {
    filename: 'hero-car-1.jpg',
    width: 800,
    height: 600,
    text: 'Smart City Car',
    bgColor: '#1e40af',
    textColor: '#ffffff'
  },
  {
    filename: 'hero-car-2.jpg',
    width: 800,
    height: 600,
    text: 'Adventure Vehicle',
    bgColor: '#059669',
    textColor: '#ffffff'
  },
  {
    filename: 'hero-car-3.jpg',
    width: 800,
    height: 600,
    text: 'Family Vehicle',
    bgColor: '#7c3aed',
    textColor: '#ffffff'
  },
  {
    filename: 'hero-car-4.jpg',
    width: 800,
    height: 600,
    text: 'Electric Vehicle',
    bgColor: '#dc2626',
    textColor: '#ffffff'
  },
  {
    filename: 'hero-video-poster.jpg',
    width: 1920,
    height: 1080,
    text: 'JAC Motors Video',
    bgColor: '#000000',
    textColor: '#ffffff'
  }
];

placeholders.forEach(placeholder => {
  const svg = createSVG(placeholder.width, placeholder.height, placeholder.text, placeholder.bgColor, placeholder.textColor);
  const filepath = path.join(imagesDir, placeholder.filename.replace('.jpg', '.svg').replace('.png', '.svg'));
  fs.writeFileSync(filepath, svg);
  console.log(`✅ Created: ${placeholder.filename}`);
});

// Create a simple video placeholder (text file for now)
const videoPlaceholder = `# This is a placeholder for the hero video
# In a real implementation, you would replace this with an actual MP4 file
# The video should showcase JAC Motors vehicles in action`;
fs.writeFileSync(path.join(imagesDir, 'hero-video.mp4'), videoPlaceholder);
console.log('✅ Created: hero-video.mp4 placeholder');

console.log('🎉 All placeholder assets created successfully!');
