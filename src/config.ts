export interface BrandingConfig {
  businessName: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
  logoUrl?: string;
}

export interface AIGeneratedContent {
  hero?: {
    headline: string;
    subtitle: string;
    cta: string;
    stats: Array<{ value: string; label: string }>;
  };
  about?: {
    mission: string;
    vision: string;
    values: string[];
  };
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface TemplateConfig {
  branding: BrandingConfig;
  modules: string[];
  darkMode?: boolean;
  aiContent?: AIGeneratedContent;
}

// Default configuration with basic sections always included
export const defaultConfig: TemplateConfig = {
  businessName: "rob",
  primaryColor: "#6366f1",
  accentColor: "#6366f1",
  fontFamily: "Inter, sans-serif",
  modules: ["hero","about","footer","gallery","staff","booking","staff-management"],
  aiContent: null
};

// Apply branding to CSS variables
export function applyBranding(branding: BrandingConfig) {
  const root = document.documentElement;
  
  // Convert hex to RGB for CSS variables
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const primaryRgb = hexToRgb(branding.primaryColor);
  const accentRgb = hexToRgb(branding.accentColor);

  if (primaryRgb) {
    root.style.setProperty('--primary-color', branding.primaryColor);
    root.style.setProperty('--primary-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
  }

  if (accentRgb) {
    root.style.setProperty('--accent-color', branding.accentColor);
    root.style.setProperty('--accent-rgb', `${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}`);
  }

  root.style.setProperty('--font-family', branding.fontFamily);
} 