const theme = {
  colors: {
    white: '#FFFFFF',
    gray1: '#F5F5F9',
    gray2: '#E9E9EE',
    gray3: '#C7C7CD',
    gray4: '#9090A0',
    gray5: '#626273',
    gray6: '#464656',
    black: '#212121',
    primary: '#FF6C3E',
    secondary: '#FF916F',
    danger: '#F5656A',
  },
  typographies: {
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    button1: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
    },
    button2: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    text1: {
      fontWeight: 500,
      fontSize: '1.75rem',
      lineHeight: '2.375rem',
    },
    text2: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    title2: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
    },
    subTitle: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
    caption1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    caption2: {
      fontWeight: 500,
      fontSize: '0.75rem',
      fontHeight: '1.125rem',
    },
  },
  size: {
    maxWidth: '480px',
    layoutPadding: '0 20px',
  },
  divider: {
    borderBottom: '1px solid #F5F5F9',
  },
} as const;

export default theme;
