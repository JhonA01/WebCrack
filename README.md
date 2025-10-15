# 🏥 Perpetual Help Medical Center Website

A modern, responsive website for Perpetual Help Medical Center built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start for cPanel Deployment

### For Immediate Upload to cPanel:

1. **Run the deployment script:**
   ```bash
   npm run deploy
   ```

2. **Follow the upload instructions:**
   - See `CPANEL_UPLOAD_INSTRUCTIONS.md` for step-by-step guide
   - Upload all files from the `dist` folder to your cPanel `public_html` directory

3. **Your website is ready!**

## 📁 Project Structure

```
├── App.tsx                          # Main application component
├── components/                      # Reusable UI components
│   ├── Header.tsx                   # Navigation header
│   ├── Footer.tsx                   # Site footer
│   ├── FullScreenVideoHero.tsx      # Video background hero
│   ├── VideoSlider.tsx              # Featured video carousel
│   ├── HMOAccreditations.tsx        # Insurance slider
│   └── ui/                          # Shadcn UI components
├── pages/                           # Individual page components
│   ├── Home.tsx                     # Homepage
│   ├── ServicesPage.tsx             # Medical services
│   ├── AboutPage.tsx                # Hospital information
│   ├── ContactPage.tsx              # Contact and location
│   ├── PatientPortalPage.tsx        # Patient login portal
│   └── CareersPage.tsx              # Job applications
├── styles/                          # Global styles
│   └── globals.css                  # Tailwind CSS configuration
└── public/                          # Static assets
    └── .htaccess                    # Apache server configuration
```

## 🌟 Features

### Core Pages
- **Homepage**: Hero section, services overview, news & events
- **Services**: Comprehensive medical specialties
- **About**: Hospital information, mission, vision, achievements
- **Contact**: Location, contact forms, hospital map
- **Patient Portal**: Login and appointment booking
- **Careers**: Job applications and opportunities

### Interactive Components
- 📹 Full-screen video hero background
- 🎥 Featured video slider
- 🏥 HMO accreditations carousel
- 👨‍⚕️ Doctors directory with search
- 📅 Appointment booking system
- 🗺️ Interactive hospital map
- 📱 Fully responsive design

### Technical Features
- ⚡ Fast loading with code splitting
- 🔒 Security headers and HTTPS
- 📱 Mobile-first responsive design
- ♿ Accessibility compliant
- 🔍 SEO optimized with structured data
- 🏥 Healthcare-specific schema markup

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Prepare for cPanel deployment
- `npm run lint` - Run ESLint

## 📋 Deployment Guide

### For cPanel Hosting (GoDaddy, etc.)
1. Run `npm run deploy`
2. Follow instructions in `CPANEL_UPLOAD_INSTRUCTIONS.md`
3. Upload contents of `dist` folder to `public_html`

### For Other Hosting Providers
- See `DEPLOYMENT_GUIDE.md` for detailed instructions
- Build creates static files compatible with any web server

## 🔧 Configuration

### Customization
- **Colors & Branding**: Edit `/styles/globals.css`
- **Content**: Update individual page components
- **Images**: Use Unsplash integration or replace with custom images
- **Contact Info**: Update contact details in Contact.tsx and Footer.tsx

### Environment Setup
- No environment variables needed for basic setup
- All configurations are in the code for simplicity
- API integrations use mock data by default

## 🏥 Healthcare Features

### SEO & Schema
- Medical specialty schema markup
- Healthcare organization structured data
- Emergency contact information
- Medical facility details

### Accessibility
- WCAG 2.1 AA compliant
- Screen reader friendly
- Keyboard navigation support
- High contrast color schemes

### Security
- HTTPS redirect
- Security headers (HSTS, XSS protection)
- Content Security Policy
- Clickjacking protection

## 📱 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Chrome Android 70+

## 🎨 Design System

Built with:
- **React 18** - Modern UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons
- **Motion** - Smooth animations

## 📄 Documentation

- `CPANEL_UPLOAD_INSTRUCTIONS.md` - Step-by-step upload guide
- `DEPLOYMENT_GUIDE.md` - Comprehensive deployment documentation
- `Attributions.md` - Image and asset credits

## 🚨 Important Notes

### Before Going Live
1. Update placeholder content with real hospital information
2. Replace placeholder contact details
3. Add real doctor profiles and images
4. Update domain URLs in meta tags
5. Set up SSL certificate
6. Test all forms and functionality

### Compliance Considerations
- Ensure HIPAA compliance for patient data
- Add privacy policy and terms of service
- Review content for medical accuracy
- Consider accessibility requirements

## 📞 Support

This website is ready for production deployment. For technical issues:

1. Check browser console for errors
2. Verify all files uploaded correctly
3. Test on multiple devices and browsers
4. Contact your hosting provider for server issues

---

**Ready to deploy?** Run `npm run deploy` and follow the cPanel upload instructions! 🚀