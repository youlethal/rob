# Modern Business Template

A production-ready, responsive website theme template built with React + Vite + TailwindCSS, designed to be fully modular and dynamically branded.

## 🚀 Features

- **Modular Design**: Conditionally render modules based on configuration
- **Dynamic Branding**: Custom colors, fonts, and logos
- **Responsive**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Modern UI**: Clean, professional design with Tailwind CSS
- **TypeScript**: Full type safety
- **Easy Configuration**: Central config file for customization

## 📁 Structure

```
src/
├── components/
│   ├── layout/
│   │   └── TemplateLayout.tsx    # Main layout orchestrator
│   ├── modules/                  # Modular components
│   │   ├── HeroSection/
│   │   ├── AboutSection/
│   │   ├── BookingModule/
│   │   ├── GalleryModule/
│   │   ├── BlogModule/
│   │   ├── ReviewsModule/
│   │   ├── ContactModule/
│   │   └── Footer/
│   └── ui/
│       └── Navbar.tsx            # Navigation component
├── config.ts                     # Central configuration
├── App.tsx                       # Main app component
└── main.tsx                      # Entry point
```

## 🎨 Configuration

The template uses a central `config.ts` file where you can inject client-specific settings:

```typescript
export const defaultConfig: TemplateConfig = {
  branding: {
    businessName: "Your Business Name",
    primaryColor: "#3B82F6",
    accentColor: "#10B981",
    fontFamily: "Inter, sans-serif",
    logoUrl: "https://example.com/logo.png"
  },
  modules: ["hero", "about", "contact", "footer"],
  darkMode: false
};
```

## 🔌 Available Modules

- **hero**: Hero section with CTA buttons
- **about**: About us section with features
- **booking**: Appointment booking placeholder
- **gallery**: Portfolio/gallery showcase
- **blog**: Blog posts section
- **reviews**: Customer testimonials
- **contact**: Contact form
- **footer**: Site footer with links

## 🎯 Usage

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Branding**:
   Edit `src/config.ts` to customize colors, fonts, and business name.

3. **Select Modules**:
   Update the `modules` array in config to include only the modules you want.

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The template uses CSS variables for dynamic theming:
- `--primary-color`: Main brand color
- `--accent-color`: Secondary accent color
- `--font-family`: Custom font family

### Adding New Modules
1. Create a new folder in `src/components/modules/`
2. Create an `index.tsx` file with your component
3. Accept `branding: BrandingConfig` as a prop
4. Add the module to the `TemplateLayout.tsx` imports
5. Add the conditional rendering in `TemplateLayout.tsx`

### Styling
- Uses Tailwind CSS for styling
- CSS variables for dynamic branding
- Responsive design with mobile-first approach
- Dark mode support (can be enabled in config)

## 🔧 Integration

This template is designed to be easily integrated into your website generator workflow:

1. **Upload as ZIP**: Package the template and upload via admin dashboard
2. **Dynamic Configuration**: Inject client-specific branding and module selection
3. **Preview System**: Generate preview URLs for clients
4. **Deployment Ready**: Build and deploy to any hosting platform

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized for all screen sizes

## 🎭 Animations

- Framer Motion for smooth entrance animations
- Staggered animations for better UX
- Scroll-triggered animations
- Hover effects and transitions

## 🚀 Performance

- Lazy loading of modules
- Optimized images and assets
- Minimal bundle size
- Fast loading times

## 📄 License

This template is part of the SaaSify platform and is designed for commercial use. 