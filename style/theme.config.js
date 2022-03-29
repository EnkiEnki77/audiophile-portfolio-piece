import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
   body: '#D87D4A',
   main: '#101010',
   mainColor: '#F1F1F1',
   accent: '#FAFAFA',
   accentColor: '#FBAF85',
   secondary: '#FFFFFF',
   secondaryColor: '#000000',
}

export const GlobalStyles = createGlobalStyle`
*{
     box-sizing: border-box;
     font-family: 'Manrope', sans-serif;
    caret-color: transparent;
  }

  html,body, .App, #root{
   margin: 0;
   padding: 0;
   width: 100%;
   font-size: 16px;
   height: 100%;
   overflow: auto;
  }

  a{
      text-decoration: none;
      color: white;
      border: none;

      &:active{
          color: white;
      }
  }

  ul{
      list-style: none;
      margin: 0;
      padding: 0;
  }`