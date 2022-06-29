import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
const Width = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid salmon;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
`;
const Desc = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin: 20px 0 70px 0;
`;
const Img = styled.div`
  width: 400px;
  height: 400px;
  background-color: gold;
`;
const Height = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: lightblue;
  border: 5px solid black;
`;

export const Scroll = () => {
  return (
    <Wrap>
      <Width>
        <Title>Peel Soothing Pad</Title>
        <Desc>하루 한장으로 순하고 깨끗하게</Desc>
        <Img></Img>
      </Width>
      <Height></Height>
    </Wrap>
  );
};
