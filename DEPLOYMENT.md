# Modern Business Template - Deployment Guide

This is a **Vite + React** project, not a Next.js project. Please ensure proper deployment configuration.

## 🚀 Vercel Deployment

### Automatic Detection
Vercel should automatically detect this as a Vite project due to:
- `vercel.json` configuration
- `package.json` with Vite scripts
- `vite.config.ts` file

### Manual Configuration (if needed)
If Vercel doesn't detect it correctly:

1. **Framework Preset**: Select "Vite"
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

## 📁 Project Structure
```
modern-business-template/
├── src/                    # Source code
├── public/                 # Static assets
├── dist/                   # Build output (Vite)
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── vercel.json            # Vercel configuration
├── tailwind.config.js     # Tailwind CSS config
└── tsconfig.json          # TypeScript config
```

## 🔧 Build Process
1. `npm install` - Install dependencies
2. `npm run build` - Build for production
3. Output goes to `dist/` directory

## ⚠️ Important Notes
- This is **NOT** a Next.js project
- Uses Vite for building and development
- Static site generation (SPA)
- No server-side rendering

## 🐛 Troubleshooting

### If Vercel tries to build as Next.js:
1. Check that `vercel.json` is present
2. Ensure `package.json` has correct scripts
3. Verify no Next.js files are present

### If .gitignore fails to upload:
1. Ensure `.gitignore` is in the root directory
2. Check file permissions
3. Verify no conflicting ignore patterns

### Build Errors:
1. Check Node.js version (requires >=18.0.0)
2. Verify all dependencies are in `package.json`
3. Check TypeScript compilation errors 