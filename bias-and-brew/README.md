# Bias and Brew Website

A professional, single-page React website for Bias and Brew, a data analytics and AI consultancy specializing in ethical AI solutions for government.

## Features
- **Modern Tech Stack**: React, Vite, Tailwind CSS, Framer Motion.
- **Responsive Design**: Mobile-first approach, fully responsive.
- **Animations**: Subtle, professional animations using Framer Motion.
- **Contact Form**: Integrated with Web3Forms.
- **SEO Optimized**: Meta tags and semantic HTML.

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Configuration

### Contact Form
The contact form uses Web3Forms. To make it functional:
1. Go to [Web3Forms](https://web3forms.com/) and create an Access Key.
2. Open `src/components/Contact.jsx`.
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual Access Key.

### Colors
Brand colors are defined in `tailwind.config.js`:
- Sapphire: `#0F52BA`
- Charcoal: `#36454F`
- Ruby: `#E0115F`
- Tangerine: `#F28500`
- Taupe: `#483C32`

## Deployment (Cloudflare Pages)

1. Connect your GitHub repository to Cloudflare Pages.
2. Use the following build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Node Version**: 18+ (Set `NODE_VERSION: 18` in environment variables if needed)

## License
All rights reserved © 2024 Bias and Brew.
