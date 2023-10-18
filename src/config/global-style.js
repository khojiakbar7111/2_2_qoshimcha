import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

export const GlobalStayle = createGlobalStyle`
html {
   height: 100%;
   scroll-behavior: smooth;
}

*,
*::before,
* ::after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

body {
   margin: 0;
   font-family: "Circe", sans-serif;
   background-color: ${COLORS.lynxWhite};
}

main {
   flex-grow: 1;
}

img {
   vertical-align: middle;
   object-fit: cover;
}
button {
   cursor: pointer;
   border:none;
}
ol,
ul {
   margin: 0;
   padding: 0;
   list-style: none;
}

a {
   text-decoration: none;
}

.visually-hidden {
   position: absolute;
   width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0;
   overflow: hidden;
   border: 0;
   clip: rect(0 0 0 0);
}
`;
