import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: lightgrey;
`;

const Con = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: white;
`;

const Title = styled.div``;

const Desc = styled.div``;

const ConWrap = styled.div``;

const Con1 = styled.div``;

export const DualEye = () => {
  return (
    <Wrap>
      <Img></Img>
      <Con>
        <Title></Title>
        <Desc></Desc>
        <ConWrap>
          <Con1></Con1>
          <Con1></Con1>
        </ConWrap>
      </Con>
    </Wrap>
  );
};
