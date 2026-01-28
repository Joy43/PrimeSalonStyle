export const Colors = {
  light: {
    primary: '#0ea5e9',
    primaryDark: '#0284c7',
    primaryLight: '#38bdf8',
    
    background: '#ffffff',
    surface: '#f9fafb',
    card: '#ffffff',
    
    text: {
      primary: '#171717',
      secondary: '#525252',
      tertiary: '#a3a3a3',
      inverse: '#ffffff',
    },
    
    border: {
      light: '#e5e5e5',
      medium: '#d4d4d4',
      dark: '#a3a3a3',
    },
    
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    
    rating: '#fbbf24',
    
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  dark: {
    primary: '#38bdf8',
    primaryDark: '#0284c7',
    primaryLight: '#7dd3fc',

    background: '#000000',
    surface: '#1a1a1a',
    card: '#262626',
    
    text: {
      primary: '#fafafa',
      secondary: '#d4d4d4',
      tertiary: '#737373',
      inverse: '#171717',
    },
    
    border: {
      light: '#404040',
      medium: '#525252',
      dark: '#737373',
    },
    
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    
    rating: '#fbbf24',
    
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
} as const;
export type ColorScheme = 'dark' | 'light';