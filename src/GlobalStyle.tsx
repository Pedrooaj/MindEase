import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-user-select: none;   /* Para navegadores WebKit (Chrome, Safari) */
  -moz-user-select: none;      /* Para navegadores Mozilla (Firefox) */
  -ms-user-select: none;       /* Para Internet Explorer */
  user-select: none; 
}



#root{
  background-color: #FFF9E6;
  overflow: hidden;
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  
}




`;

export default GlobalStyle;