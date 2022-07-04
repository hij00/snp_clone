import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
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

const HeightW = styled.div`
  width: 50%;
  /* height: 300vh; */
  display: flex;
  flex-direction: column;
`;

const Height = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: lightblue;
  border: 5px solid black;
  position: sticky;
  top: 0;
`;
const HeightWrap = styled.div`
  /* position: relative;
  top: 0;
  right: 0;
  width: 50%; */
  height: 300vh;
`;

export const Scroll = ({ scrollData }) => {
  return (
    <Wrap>
      <Width>
        <Title>Peel Soothing Pad</Title>
        <Desc>하루 한장으로 순하고 깨끗하게</Desc>
        <Img></Img>
      </Width>
      <HeightW>
        {scrollData.map((img) => (
          <HeightWrap key={img.id}>
            <Height>{img.title}</Height>
          </HeightWrap>
        ))}
      </HeightW>
    </Wrap>
  );
};
