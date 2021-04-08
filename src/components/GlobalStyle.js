import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     
 }
html{
    @media   (max-width: 1700px){
        font-size: 75%;
    }
}
 body {
     background: #1b1b1b;
     font-family: 'Inter', sans-serif;
     overflow-x: hidden;     
 }
 button {
     font-weight: bold;
     font-size: 1rem;
     cursor: pointer;
     font-family: 'Inter', sans-serif;
     padding: 1rem 2rem;
     border: 3px solid #23d997;
     background: transparent;
     color: white;
     transition: all 0.5s ease ;
     outline: none;
     &:hover{
        background-color: #23d997;
     }
     
 }
 h2 { 
     font-size: 3.6rem;
     font-weight: lighter;
     color: white;
 }

 h3 {
     color: white;
 }
 h4 { 
     font-weight: bold;
     font-size: 2rem;
     color: white;
 }
 a {
     font-size: 1.1rem;
 }
 span {
     color: #23d997;
     font-weight: bold;
 }
 p {
     padding: 3rem 0rem;
     color: #ccc;
     font-size: 1.1rem
 }
`;

export default GlobalStyle;
