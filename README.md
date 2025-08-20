# JAC Motors Website Clone

This is a Next.js project that replicates the JAC Motors website (https://jacen.jac.com.cn/) section by section. Currently, the first section (hero section) has been implemented.

## 🚀 Features Implemented

### Hero Section
- **Responsive Navbar** with:
  - JAC Motors logo
  - Navigation menu (Models, Company, News & Events, Lifestyle, Owners)
  - Language selector (中文, Español, العربية)
  - Mobile-responsive hamburger menu
  - Fixed positioning with backdrop blur effect

- **Hero Section** with:
  - Video background (placeholder)
  - Carousel of 4 different vehicle showcases
  - Animated text transitions
  - Call-to-action buttons
  - Slide indicators
  - Video controls (play/pause, mute/unmute)
  - Scroll indicator animation

## 🛠️ Technologies Used

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## 📁 Project Structure

```
jac-motors-clone/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navbar.tsx        # Navigation component
│       └── HeroSection.tsx   # Hero section component
├── public/
│   └── images/               # Placeholder assets
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Navbar
- Fixed positioning with backdrop blur
- Smooth hover effects
- Mobile-responsive design
- Language dropdown functionality

### Hero Section
- Full-screen video background
- Smooth carousel transitions
- Responsive grid layout
- Animated text and images
- Interactive slide indicators

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔧 Customization

### Adding Real Assets
To replace placeholder images with real JAC Motors assets:

1. Replace files in `public/images/`:
   - `logo.svg` - JAC Motors logo
   - `hero-car-1.svg` to `hero-car-4.svg` - Vehicle images
   - `hero-video.mp4` - Background video
   - `hero-video-poster.svg` - Video poster image

2. Update image paths in components if needed

### Styling
- Colors and fonts can be customized in `src/app/globals.css`
- Component-specific styles are in their respective `.tsx` files
- Tailwind classes are used for responsive design

## 🎯 Next Steps

This is the first section of the JAC Motors website clone. Future sections to implement:

1. **Vehicle Models Section** - Car showcase grid
2. **Company Information** - About JAC Motors
3. **News & Events** - Latest updates
4. **Lifestyle Section** - Brand stories
5. **Owners Section** - Customer resources
6. **Footer** - Contact information and links

## 📄 License

This project is for educational purposes only. All rights belong to JAC Motors.

## 🤝 Contributing

Feel free to contribute by:
- Adding new sections
- Improving animations
- Enhancing mobile responsiveness
- Adding more interactive features

---

**Note:** This is a clone for educational purposes. The original website and all associated assets belong to JAC Motors.
# jacmotors
