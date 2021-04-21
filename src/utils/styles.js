import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Defaut',
    colors: {
      main: '#EF0D50',
      second: '#ffffff',
      ter: '#32337B',
      quad: '50, 51, 123',
      background: '#ffffff',
      text: '#32337B',
    },
    fonts: {
      body: '"Montserrat Alternates", sans-serif',
      title: '"Montserrat Alternates", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${83.75}rem)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${62}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${62}px)`,
      large: `@media screen and (min-width: ${92}em)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  classic: {
    name: 'No Map',
    colors: {
      main: '#EF0D50',
      second: '#ffffff',
      ter: '#32337B',
      quad: '50, 51, 123',
      background: '#ffffff',
      text: '#32337B',
    },
    fonts: {
      body: '"Montserrat Alternates", sans-serif',
      title: '"Montserrat Alternates", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${83.75}rem)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  night: {
    name: 'Nuit',
    colors: {
      main: '#92F2D2',
      second: '#1e1e1e',
      ter: '#ffffff',
      quad: '146, 242, 210',
      background: '#1e1e1e',
      text: '#ffffff',
    },
    fonts: {
      body: '"Montserrat Alternates", sans-serif',
      title: '"Montserrat Alternates", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${83.75}rem)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  simple: {
    name: 'Simple',
    colors: {
      main: '#000091',
      second: '#ffffff',
      ter: '#1e1e1e',
      quad: '62, 3, 128',
      background: '#ffffff',
      text: '#1e1e1e',
    },
    fonts: {
      body: '"Montserrat Alternates", sans-serif',
      title: '"Montserrat Alternates", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${83.75}rem)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.body};
    line-height: 1.4;
    text-rendering: geometricPrecision;

    ${(props) => props.theme.mq.small} {
      font-size: 0.875em;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
  }

  #root {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 900;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }

  option {
    color: #010101;
  }
`
