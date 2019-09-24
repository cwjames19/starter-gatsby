const colors = {
  white: '#fff',
  semiLightGrey: '#B6B6B6',
  mediumLightGrey: '#DCDCDC',
  lightGrey: '#FAFAFA',
  grey: '#ADADAD',
  darkGrey: '#5B5B5B',
  black: '#000',

  // Layout colors
  backgroundColor: colors.white,
};

// Typography
const fontFamily = {};
const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};
const fontSize = {
  error: '14px',
  phone: '16px',
  tablet: '18px',
};

// Easing functions
const easing = {
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
};

const layout = {
  // containerWidth: 1220,
};

const base = {
  fontFamily: 'Untitled Font Family',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '1.55',
  textColor: colors.darkGrey,
};

const variables = {
  color: { ...colors },

  fontFamily: { ...fontFamily },

  fontWeight: { ...fontWeight },

  fontSize: { ...fontSize },

  base: { ...base },

  layout: { ...layout },

  easing: { ...easing },
};

export default variables;
