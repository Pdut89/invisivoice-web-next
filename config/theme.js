const colors = {
  primary: {
    default: '#3866b0',
    light: '#769edb',
    dark: '#223657',
  },
  secondary: {
    default: '#8a4646',
  },
  gray: {
    xlight: '#edebeb',
    light: '#c2c2c2',
    default: '#5f6163',
  },
  black: '#000',
  white: '#FFF',
  red: ['#e30000'],
  transparent: 'rgba(0,0,0,0)',
}

const borders = {
  primary: {
    light: `0.1rem solid ${colors.primary.light}`,
    default: `0.1rem solid ${colors.primary.default}`,
    dark: `0.1rem solid ${colors.primary.dark}`,
  },
  gray: {
    light: `0.1rem solid ${colors.gray.light}`,
  },
}

const fontSizes = {
  xsmall: '0.75rem',
  small: '0.875rem',
  medium: '1rem',
  large: '1.5rem',
}

export const fontWeights = {
  light: 300,
  medium: 400,
  semi: 500,
  bold: 600,
  extrabold: 700,
}

const radii = {
  xxsmall: '0.25rem',
  xsmall: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
}

const theme = {
  colors,
  borders,
  fontSizes,
  fontWeights,
  radii,
}

export default theme
