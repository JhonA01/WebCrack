# Medical Services Management Guide

## Overview
The Medical Services Management system allows administrators to dynamically control the "Our Medical Services" section displayed on the Services page of the Perpetual Help Medical Center website.

## Quick Start 🚀

1. **Access:** Admin Panel → Services Tab (Heart icon)
2. **Add Service:** Click green "Add New Service" button
3. **Upload Image:** Click "Upload from Device" → Select image (PNG/JPG/SVG, max 2MB)
4. **Fill Details:** Add name, description, icon, color, and order
5. **Enable:** Check the enable box to make it visible
6. **Save:** Click "Add Service" button

**Pro Tip:** Use square images (64x64px or 128x128px) for best results!

## Accessing Services Management

1. Log in to the **Admin Panel** at `/admin`
2. Navigate to the **"Services"** tab (with the Heart icon)
3. You'll see a grid of all medical services with their status

## Features

### Adding a New Service

1. Click the **"Add New Service"** button (green button in top right)
2. Fill in the service details:
   - **Service Name*** (Required): e.g., "Cardiology", "Neurology", "Pediatrics"
   - **Service Description*** (Required): Describe what the service offers
   - **Icon**: Choose from 18 medical-related icons (Heart, Brain, Stethoscope, etc.)
   - **Icon Color**: Select a color for the icon (Red, Purple, Blue, etc.)
   - **Service Image** (Optional): Upload an image from your device or paste a URL
     - Click **"Upload from Device"** to select an image file (PNG, JPG, SVG)
     - Or paste a web URL in the text field below
     - Image preview appears after upload/URL entry
     - Click the ❌ button on preview to remove the image
     - Recommended size: 64x64px or 128x128px (square format)
     - Max upload size: 2MB
     - If provided, the image will be displayed instead of the icon
   - **Display Order**: Lower numbers appear first (1, 2, 3...)
   - **Enable Checkbox**: Check to make service visible on the website

3. Click **"Add Service"** to save

### Editing a Service

1. Find the service card in the grid
2. Click the **"Edit"** button
3. Modify any fields
4. Click **"Update Service"** to save changes

### Managing Services

**Enable/Disable:**
- Click the eye icon button to toggle service visibility
- Disabled services won't appear on the public website but remain in your database

**Delete:**
- Click the red trash icon button
- Confirm deletion when prompted
- **Warning:** This action cannot be undone

**Reorder:**
- Edit the service and change its "Display Order" number
- Lower numbers appear first on the website

## Service Display Options

### Option 1: Icon Display (Default)
- Services display with a colorful Lucide icon
- Icon automatically scales and centers
- Color can be customized per service

### Option 2: Custom Image Display
- Add an image URL in the "Service Image" field
- Image replaces the icon automatically
- Images should be square (equal width/height)
- Recommended formats: PNG, SVG, or JPG
- The system uses ImageWithFallback for error handling

## Image Upload Methods

### Method 1: Upload from Device (Recommended)
1. Click **"Upload from Device"** button in the service dialog
2. Select an image file from your computer (PNG, JPG, SVG, etc.)
3. The image will be automatically converted and stored
4. **Max file size:** 2MB
5. **Recommended formats:** PNG or SVG with transparent background
6. The image is stored as base64 data, so it works offline

### Method 2: Web URL
Paste a direct link to an image:
```
https://example.com/cardiology-icon.png
https://cdn.hospital.com/images/neurology.svg
```

### Method 3: Local File Path (If hosting locally)
```
/uploads/cardiology-icon.png
/assets/services/pediatrics.png
```

### Method 4: Figma Assets (If using Figma imports)
```
figma:asset/[asset-hash].png
```

## Service Statistics

At the bottom of the Services tab, you'll see:
- **Total Services**: All services in the system
- **Active**: Services currently visible on the website
- **With Images**: Services using custom images instead of icons

## Best Practices

1. **Naming**: Use clear, professional service names
2. **Descriptions**: Keep descriptions concise (1-2 sentences)
3. **Images**: 
   - Use consistent image sizes across all services
   - Prefer SVG or PNG with transparent backgrounds
   - Optimize images for web (compress before uploading)
4. **Colors**: Choose colors that match your service specialty
5. **Order**: Arrange services by importance or alphabetically
6. **Testing**: After adding/editing, check the Services page to verify appearance

## Default Services

The system comes pre-loaded with 8 default services:
1. Cardiology (Heart icon, Red)
2. Neurology (Brain icon, Purple)
3. Emergency Medicine (Stethoscope icon, Blue)
4. Pediatrics (Baby icon, Pink)
5. Orthopedics (Bone icon, Orange)
6. Ophthalmology (Eye icon, Green)
7. Internal Medicine (Activity icon, Dark Blue)
8. Preventive Care (Shield icon, Teal)

You can edit, disable, or delete these default services as needed.

## Real-Time Updates

All changes made in the Admin Panel are immediately reflected on the public-facing Services page. No page refresh required for administrators viewing the site.

## Storage

Services data is stored in the browser's `localStorage` under the key `phmc_medical_services`. This ensures data persists across sessions even without a backend database.

### How Uploaded Images Work

When you upload an image from your device:
1. The image is converted to **base64** format (text representation)
2. This base64 data is stored directly in localStorage with the service data
3. The image appears instantly without needing a server
4. Images persist across browser sessions
5. **Note:** Base64 images are larger than the original file size, so keep images optimized

**Advantages:**
- ✅ No server/hosting required
- ✅ Works completely offline
- ✅ Instant upload and display
- ✅ Images never break or go missing

**Limitations:**
- ⚠️ localStorage has a 5-10MB limit (shared across all data)
- ⚠️ Base64 images are ~33% larger than original
- ⚠️ Keep individual images under 2MB
- ⚠️ Data is browser-specific (doesn't sync across devices)

## Troubleshooting

**Service not appearing on website:**
- Check if the service is enabled (green "Active" badge)
- Verify the service has both title and description filled
- Check browser console for any errors

**Image not displaying:**
- Verify the image URL is correct and accessible
- Check image file format (PNG, JPG, SVG supported)
- Try using a different image URL
- If using local path, ensure file is uploaded to correct directory
- For uploaded files, check file size (must be under 2MB)
- Clear browser cache and reload the page
- Try re-uploading the image

**Changes not saving:**
- Ensure all required fields are filled (marked with *)
- Check browser console for JavaScript errors
- Clear browser cache and try again

## Support

For additional help or questions about the Services Management system, refer to the main admin documentation or contact the development team.

---

**Last Updated:** October 14, 2025
**Version:** 1.0
