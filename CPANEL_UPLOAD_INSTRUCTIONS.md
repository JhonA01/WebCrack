# 🏥 cPanel Upload Instructions - Perpetual Help Medical Center

## Quick Start Guide

### Step 1: Prepare Your Files
```bash
# Run the deployment script
node deploy.js
```

This will:
- Clean previous builds
- Install dependencies
- Build the production version
- Copy necessary files
- Verify the build

### Step 2: Access cPanel
1. **Login to GoDaddy**
   - Go to your GoDaddy account
   - Navigate to your hosting account
   - Click "Manage" next to your hosting plan

2. **Open cPanel**
   - Click "cPanel Admin" button
   - You'll be redirected to your cPanel dashboard

### Step 3: Upload Files
1. **Open File Manager**
   - In cPanel, find and click "File Manager"
   - Navigate to `public_html` directory

2. **Clear Existing Files**
   - Select all existing files in `public_html`
   - Click "Delete" to remove them
   - **Important**: Keep any existing `.htaccess` if you have custom rules

3. **Upload New Files**
   - Click "Upload" button
   - Select all files from your local `dist` folder
   - **Upload these specific files:**
     ```
     dist/
     ├── index.html          (Main website file)
     ├── .htaccess          (Server configuration)
     ├── favicon.svg        (Website icon)
     ├── assets/            (CSS, JS, and other assets)
     │   ├── index-[hash].js
     │   ├── index-[hash].css
     │   └── vendor-[hash].js
     ```

### Step 4: Verify Upload
1. **Check File Structure**
   Your `public_html` should look like:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── favicon.svg
   └── assets/
       ├── (various JS and CSS files)
   ```

2. **Set Permissions**
   - Right-click `.htaccess`
   - Click "Change Permissions"
   - Set to `644` (rw-r--r--)

### Step 5: Test Your Website
1. **Visit Your Domain**
   - Open your browser
   - Go to `https://yourdomain.com`
   - Your website should load!

2. **Test Navigation**
   - Click on different menu items
   - Refresh the page (should not show 404 errors)
   - Test on mobile devices

## ⚠️ Important Notes

### File Upload Tips
- **Upload ALL files** from the `dist` folder
- **Don't forget** the `.htaccess` file (it might be hidden)
- **Maintain folder structure** - keep the `assets` folder intact
- **File sizes**: Total upload should be under 50MB

### Common Issues & Solutions

#### 1. "Page Not Found" when refreshing
**Problem**: `.htaccess` file missing or incorrect permissions
**Solution**: 
- Ensure `.htaccess` is uploaded to `public_html`
- Set permissions to 644
- Check that rewrite rules are included

#### 2. White screen or JavaScript errors
**Problem**: Assets not loading properly
**Solution**:
- Verify all files in `assets/` folder are uploaded
- Check browser console for 404 errors
- Ensure file names match exactly

#### 3. SSL/HTTPS issues
**Problem**: Mixed content warnings
**Solution**:
- Enable SSL in cPanel (Security > SSL/TLS)
- Force HTTPS redirect (included in .htaccess)

#### 4. Mobile display issues
**Problem**: Website not responsive on mobile
**Solution**:
- Clear browser cache
- Test in incognito/private browsing mode
- Check viewport meta tag in HTML

### GoDaddy Specific Tips

1. **SSL Certificate**: 
   - Go to cPanel > SSL/TLS
   - Install free Let's Encrypt certificate

2. **Domain Settings**:
   - Ensure domain points to correct directory
   - Check DNS settings if using custom domain

3. **Performance**:
   - Enable compression in cPanel (already included in .htaccess)
   - Use cPanel metrics to monitor site performance

## 🔧 Technical Specifications

### Browser Support
- ✅ Chrome 70+
- ✅ Firefox 65+  
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

### Performance Features
- Code splitting for faster loading
- Asset compression via .htaccess
- Browser caching enabled
- Mobile-optimized design

### Security Features
- HTTPS redirect
- Security headers
- XSS protection
- Clickjacking protection

## 📞 Support

If you encounter issues:

1. **Check GoDaddy Status**: Visit status.godaddy.com
2. **cPanel Documentation**: Available in your cPanel
3. **GoDaddy Support**: 24/7 phone and chat support
4. **Clear Browser Cache**: Try incognito/private mode

## ✅ Go-Live Checklist

- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` file present and permissions set to 644
- [ ] Website loads at your domain
- [ ] All pages accessible via navigation
- [ ] Mobile responsiveness confirmed
- [ ] SSL certificate active (https:// works)
- [ ] Contact forms tested (if applicable)
- [ ] No JavaScript errors in browser console
- [ ] Social media previews working
- [ ] Page load speed acceptable (under 3 seconds)

Your Perpetual Help Medical Center website is ready to serve patients online! 🏥✨

---

**Need help?** This guide covers the most common scenarios for GoDaddy cPanel hosting. Each hosting provider may have slight variations in their control panel interface.