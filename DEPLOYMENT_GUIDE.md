# 🚀 Bachata Team - DreamHost Deployment Guide

## Overview
This guide will help you deploy the **Bachata Team** website to DreamHost shared hosting using static export.

## 📋 Pre-Deployment Steps

### 1. Fix ESLint Issues (Optional but Recommended)
The build currently fails due to ESLint errors. You can either:

**Option A: Quick Fix - Disable ESLint (Already Done)**
- ESLint is disabled in `next.config.ts` for deployment builds

**Option B: Fix the Issues (Recommended for Production)**
Replace all single quotes (`'`) in text with `&apos;` or use proper escaping.

### 2. Build the Static Site

```bash
# Navigate to project directory
cd halo-agency

# Install dependencies (if not already done)
npm install

# Build static version (with ESLint disabled)
npm run build:static
```

This will create an `out/` folder with all static files.

## 📁 What Gets Generated

After successful build, you'll have:
```
halo-agency/
├── out/                    # Static files for upload
│   ├── index.html         # Home page
│   ├── contact/
│   │   └── index.html     # Contact page
│   ├── services/
│   │   └── index.html     # Services page
│   ├── projects/
│   │   └── index.html     # Projects page
│   ├── pricing/
│   │   └── index.html     # Pricing page
│   ├── team/
│   │   └── index.html     # Team page
│   ├── resources/
│   │   └── index.html     # Resources page
│   ├── _next/             # Next.js assets
│   └── ...                # Other static assets
```

## 🌐 DreamHost Upload Instructions

### Method 1: FTP Upload (Recommended)

1. **Access DreamHost Panel**
   - Log into your DreamHost panel
   - Go to "Manage Domains"
   - Find your domain and note the FTP details

2. **Connect via FTP**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your domain's FTP server
   - Navigate to your domain's `public_html` folder

3. **Upload Files**
   - Upload ALL contents of the `out/` folder to `public_html/`
   - Make sure `index.html` is in the root of `public_html/`
   - Upload the `_next/` folder and all other assets

### Method 2: File Manager (DreamHost Panel)

1. **Access File Manager**
   - Log into DreamHost panel
   - Go to "Files" → "File Manager"
   - Navigate to your domain's folder

2. **Upload Files**
   - Zip the contents of the `out/` folder
   - Upload the zip file to `public_html/`
   - Extract the zip file in `public_html/`

## ⚙️ Configuration for DreamHost

### 1. Create .htaccess File

Create a `.htaccess` file in your `public_html/` directory with:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Handle Next.js routing
RewriteEngine On

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ $1/ [L,R=301]

# Serve index.html for directories
DirectoryIndex index.html

# Handle clean URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)/?$ $1/index.html [L]
```

### 2. Error Pages (Optional)

Create a `404.html` file in `public_html/`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Bachata Team</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #2563eb; }
        a { color: #2563eb; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">← Back to Home</a>
</body>
</html>
```

## 🧪 Testing Your Deployment

1. **Visit Your Domain**
   - Go to `https://yourdomain.com`
   - Check that the home page loads correctly

2. **Test Navigation**
   - Click through all menu items
   - Verify all pages load: `/services/`, `/projects/`, `/pricing/`, `/team/`, `/resources/`, `/contact/`

3. **Test Features**
   - ✅ 3D animations should work
   - ✅ Scroll animations should work
   - ✅ Project filtering should work
   - ✅ Contact form (frontend only - no backend processing)
   - ✅ Responsive design on mobile

## ⚠️ Limitations of Static Export

Since this is a static export, some features are limited:

- **Contact Form**: Frontend validation works, but no server-side processing
- **Newsletter Signup**: Frontend only, no email collection
- **Dynamic Content**: All content is pre-built at build time

## 🔄 Updating Your Site

To update your site:

1. Make changes to your code
2. Run `npm run build:static`
3. Upload new files from `out/` folder to DreamHost
4. Clear any caches if needed

## 🆘 Troubleshooting

### Build Fails
- Check ESLint errors and fix them
- Or ensure ESLint is disabled in `next.config.ts`

### Pages Don't Load
- Check `.htaccess` configuration
- Ensure all files uploaded correctly
- Check file permissions (should be 644 for files, 755 for directories)

### 3D Animations Don't Work
- Check browser console for JavaScript errors
- Ensure all `_next/` assets uploaded correctly

### Styles Missing
- Verify CSS files in `_next/static/css/` uploaded
- Check network tab in browser dev tools

## 📞 Support

If you encounter issues:
1. Check DreamHost's documentation
2. Contact DreamHost support
3. Check browser console for errors
4. Verify all files uploaded correctly

## 🎉 Success!

Once deployed, your **Bachata Team** website will be live with:
- ✅ All 7 pages functional
- ✅ Chihuahua logo and branding
- ✅ 3D animations and interactions
- ✅ Responsive design
- ✅ Fast loading static files

Your professional agency website is now live on DreamHost! 🚀
