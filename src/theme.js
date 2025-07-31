// src/theme.js
export const colors = {
  primary: '#001F3F',
  accent: '#FFD700',
  background: '#FFFFFF',
  text: '#001F3F',
  mutedText: '#4A4A4A',
};

export const typography = {
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  fontSizes: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    body: '1rem',
    small: '0.875rem',
  },
  lineHeights: {
    heading: '1.2',
    body: '1.6',
  },
};

export const breakpoints = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
};

export default { colors, typography, breakpoints };
