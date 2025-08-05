import { useEffect } from 'react';
import { defaultConfig, applyBranding } from './config';
import TemplateLayout from './components/layout/TemplateLayout';

function App() {
  useEffect(() => {
    // Apply branding on mount
    applyBranding(defaultConfig.branding);
  }, []);

  return (
    <TemplateLayout 
      branding={defaultConfig.branding}
      modules={defaultConfig.modules}
      darkMode={defaultConfig.darkMode}
    />
  );
}

export default App; 