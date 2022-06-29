import styled from "styled-components";
import { Container } from "../../../components/Container";

const Text = styled.div`
  font-size: 70px;
  font-weight: 900;
  margin-bottom: 50px;
`;
const Site = styled.div``;
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 2880px; */
  overflow: hidden;
`;
const Img = styled.div`
  width: 300px;
  height: 300px;
  background-color: gold;
  margin-right: 20px;
`;

export const Insta = ({ instaData }) => {
  return (
    <>
      <Container>
        <Text>We are on Instagram</Text>
        <Site></Site>
      </Container>
      <ImgWrap>
        {instaData.map((insta) => (
          <Img>{insta.img}</Img>
        ))}
      </ImgWrap>
    </>
  );
};
