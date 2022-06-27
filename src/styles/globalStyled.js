import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainStyle = {
  color: "#353535",
};

export const GlobalStyled = createGlobalStyle`
${reset}
a{
    text-decoration: none;
    color: ${MainStyle.color}
}
`;
