import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#FF6495',
      second: '#F8F9FA',
      ter: '#78FFF1',
      background: '#4f24db',
      text: '#F8F9FA',
    },
    fonts: {
      body: '"Montserrat Alternates", sans-serif',
      title: '"Montserrat Alternates", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${650}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  classic: {
    name: 'Classique',
    colors: {
      main: '#32337B',
      second: '#fdfdfd',
      background: '#fdfdfd',
      text: '#32337B',
    },
    fonts: {
      body: '"Montserrat Alternates", sans-serif',
      title: '"Montserrat Alternates", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${650}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  night: {
    name: 'Nuit',
    colors: {
      main: '#fdfdfd',
      second: '#282c35',
      background: '#282c35',
      text: '#fdfdfd',
    },
    fonts: {
      body: '"Montserrat Alternates", sans-serif',
      title: '"Montserrat Alternates", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${650}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  accessible: {
    name: 'Accessible',
    colors: {
      main: 'black',
      second: 'white',
      background: 'white',
      text: 'black',
    },
    fonts: {
      body: 'Arial, sans-serif',
      title: 'Arial, sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${650}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
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
    font-family: ${(props) => props.theme.fonts.body};
    scroll-behavior: smooth;
    line-height: 1.4;
    
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
    font-style: italic;
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }
`
