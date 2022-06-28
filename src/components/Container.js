import styled from "styled-components";
import { MainStyle } from "../styles/globalStyled";

const Section = styled.section`
  padding: ${MainStyle.padding};
`;

export const Container = ({ children }) => {
  return <Section>{children}</Section>;
};
