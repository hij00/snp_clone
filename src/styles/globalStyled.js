import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainStyle = {
  color: "#1d1d1d",
  padding: "0 120px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
a{
    text-decoration: none;
    color: ${MainStyle.color}
}
*{
  box-sizing: border-box;
}
body{
  background-color: gray;
}
`;
