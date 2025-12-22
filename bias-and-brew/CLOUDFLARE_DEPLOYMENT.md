# Cloudflare Pages Deployment Guide

This guide will help you deploy the Bias and Brew website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works fine)
- Your website code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js installed locally for testing

## Deployment Steps

### 1. Connect Your Repository to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** from the left sidebar
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select your Git provider and authorize Cloudflare to access your repositories
5. Choose the repository containing this website
6. Select the branch you want to deploy (usually `main` or `master`)

### 2. Configure Build Settings

Use the following settings when prompted:

| Setting | Value |
|---------|-------|
| **Framework preset** | Vite |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `bias-and-brew` |
| **Node version** | 18 or later |

> [!IMPORTANT]
> **Root directory** must be set to `bias-and-brew` because your website code is in a subdirectory of the repository. Without this setting, Cloudflare will look for files in the wrong location and the deployment will fail.

### 3. Environment Variables (Optional)

If your application requires any environment variables:

1. In the Cloudflare Pages setup, scroll to **Environment variables**
2. Add any required variables (e.g., API keys, endpoints)
3. Format: `VITE_VARIABLE_NAME=value` (Vite requires the `VITE_` prefix)

### 4. Deploy

1. Click **Save and Deploy**
2. Cloudflare will automatically:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Run the build command (`npm run build`)
   - Deploy the `dist` folder to their global CDN

3. Your site will be live at: `https://<your-project-name>.pages.dev`

### 5. Custom Domain (Optional)

To use your own domain:

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow the instructions to:
   - Add the domain to Cloudflare (if not already there)
   - Update DNS records as instructed
5. SSL certificates are automatically provisioned

## Build Configuration Files

The following files ensure proper deployment:

- **`public/_redirects`**: Handles SPA routing (all routes → index.html)
- **`public/_headers`**: Sets security headers and caching policies
- **`vite.config.js`**: Optimized build configuration

## Testing Locally Before Deployment

Always test the production build locally first:

```bash
# Navigate to the project directory
cd bias-and-brew

# Install dependencies (if not already done)
npm install

# Build for production
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` (or the URL shown) to test the production build.

## Continuous Deployment

Once set up, Cloudflare Pages automatically deploys:

- **Production**: Commits to your main branch → `https://your-domain.com`
- **Preview**: Pull requests and other branches → `https://<branch>.<project>.pages.dev`

## Troubleshooting

### Build Fails

- Check the build logs in Cloudflare Pages dashboard
- Ensure all dependencies are in `package.json` (not just `devDependencies` for build tools)
- Verify Node.js version compatibility

### 404 Errors on Routes

- Ensure `_redirects` file is in the `public` folder
- File should contain: `/* /index.html 200`

### Assets Not Loading

- Check browser console for CORS or security errors
- Review `_headers` file to ensure CSP allows necessary resources
- Verify asset paths in your code use relative URLs

### Performance Issues

- Enable Cloudflare's built-in CDN features
- Check the **Speed** tab in Cloudflare dashboard for optimization suggestions
- Consider enabling Auto Minify for HTML, CSS, and JavaScript

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Production Build Guide](https://vitejs.dev/guide/build.html)
- [Cloudflare Pages Known Issues](https://developers.cloudflare.com/pages/platform/known-issues/)

## Support

For issues specific to this website, check the repository issues page.
For Cloudflare Pages issues, visit the [Cloudflare Community](https://community.cloudflare.com/).
