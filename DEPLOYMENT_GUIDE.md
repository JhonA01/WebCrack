# GoDaddy Deployment Guide for Perpetual Help Medical Center

## Prerequisites

1. **Node.js**: Install Node.js 18+ from [nodejs.org](https://nodejs.org/)
2. **GoDaddy Hosting**: Shared hosting account with cPanel access
3. **Domain**: Your purchased domain name
4. **FTP/File Manager**: Access to upload files

## Build Process

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized static files.

### Step 3: Test Locally (Optional)
```bash
npm run preview
```

## GoDaddy Deployment Steps

### Method 1: File Manager (Recommended)

1. **Login to cPanel**
   - Go to your GoDaddy hosting account
   - Access cPanel

2. **Navigate to File Manager**
   - Open File Manager
   - Go to `public_html` directory (or your domain's directory)

3. **Clear Existing Files**
   - Delete any existing files in the directory
   - Keep `.htaccess` if you have custom configurations

4. **Upload Build Files**
   - Upload all contents from the `dist` folder
   - Ensure `.htaccess` is in the root directory
   - File structure should look like:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── assets/
   │   ├── index-[hash].js
   │   ├── index-[hash].css
   │   └── vendor-[hash].js
   └── favicon.svg
   ```

### Method 2: FTP Upload

1. **Use FTP Client** (FileZilla, WinSCP, etc.)
2. **Connect to your hosting**
   - Host: Your domain or FTP server
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (or as provided by GoDaddy)

3. **Upload Files**
   - Navigate to `public_html`
   - Upload all `dist` folder contents

## Domain Configuration

### Update URLs
Replace placeholder URLs in:
- `index.html` (og:url, twitter:url)
- Update schema.org structured data with your actual domain

### SSL Certificate
- Enable SSL in GoDaddy cPanel
- Force HTTPS redirect (included in .htaccess)

## Browser Compatibility

This build supports:
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Chrome Android 70+

## Performance Optimizations

### Included Features:
- **Code Splitting**: Vendor chunks for better caching
- **Asset Optimization**: Images and CSS minification
- **Compression**: Gzip/Deflate enabled via .htaccess
- **Caching**: Browser caching headers
- **CDN Ready**: Relative paths for CDN compatibility

### Post-Deployment Optimizations:

1. **Image Optimization**
   - Compress images before upload
   - Use WebP format when possible
   - Consider lazy loading for large images

2. **Monitoring**
   - Set up Google Analytics
   - Monitor Core Web Vitals
   - Check mobile responsiveness

## Troubleshooting

### Common Issues:

1. **"Page Not Found" on Refresh**
   - Ensure `.htaccess` is uploaded and has correct rewrite rules
   - Check file permissions (644 for .htaccess)

2. **CSS/JS Not Loading**
   - Verify all files in `assets` folder are uploaded
   - Check browser console for 404 errors
   - Ensure relative paths are working

3. **HTTPS Issues**
   - Enable SSL in cPanel
   - Update all hardcoded HTTP URLs to HTTPS
   - Check mixed content warnings

4. **Mobile Issues**
   - Test responsive design
   - Check viewport meta tag
   - Verify touch interactions work

### Debug Steps:

1. **Browser Console**: Check for JavaScript errors
2. **Network Tab**: Look for failed resource loads
3. **Mobile Testing**: Use browser dev tools mobile view
4. **Speed Test**: Use PageSpeed Insights or GTmetrix

## Security Considerations

### Included Security Features:
- HTTPS redirect
- Security headers (HSTS, XSS Protection, etc.)
- Content Security Policy
- Clickjacking protection

### Additional Recommendations:
- Regular backups via cPanel
- Keep dependencies updated
- Monitor for vulnerabilities
- Consider additional firewall rules

## SEO & Healthcare Compliance

### Included Features:
- Schema.org markup for healthcare
- Meta tags for social sharing
- Medical specialty tags
- Mobile-friendly design
- Fast loading times

### Additional Steps:
- Submit sitemap to Google Search Console
- Set up Google My Business for hospital
- Ensure HIPAA compliance for any patient data
- Add privacy policy and terms of service

## Maintenance

### Regular Tasks:
1. **Monthly**: Check for broken links
2. **Quarterly**: Update dependencies and rebuild
3. **Yearly**: Review security headers and SSL certificate
4. **As Needed**: Content updates and new features

### Backup Strategy:
- Download site files monthly
- Export any databases
- Keep local development environment updated

## Support Contacts

- **GoDaddy Support**: Available 24/7 via phone/chat
- **Emergency**: For critical site issues during deployment
- **Development**: Keep local environment for testing changes

## Go-Live Checklist

- [ ] All files uploaded to public_html
- [ ] .htaccess file in place and working
- [ ] SSL certificate active
- [ ] Domain properly configured
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] Contact forms working (if implemented)
- [ ] Analytics tracking installed
- [ ] Speed test completed
- [ ] SEO meta tags verified
- [ ] Social media previews working
- [ ] Cross-browser testing completed

Your Perpetual Help Medical Center website is now ready for production! 🏥✨