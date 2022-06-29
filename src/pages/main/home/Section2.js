import styled from "styled-components";
import { Container } from "../../../components/Container";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrap = styled.div`
  width: 500px;
  background-color: lightgrey;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Contents = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const ConWrap = styled.div`
  width: 400px;
  margin-right: 40px;
`;

const Con = styled.div`
  width: 400px;
  height: 400px;
  background-color: gold;
`;

const ConTitle = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 900;
`;

export const Section2 = ({ lovedData }) => {
  return (
    <Container>
      <Wrap>
        <TextWrap>
          <Title>Most Loved</Title>
          <Desc>Snp의 인기 제품들을 만나보세요.</Desc>
        </TextWrap>
        <Contents>
          {lovedData.map((loved) => (
            <ConWrap key={loved.id}>
              <Con></Con>
              <ConTitle>{loved.title}</ConTitle>
            </ConWrap>
          ))}
        </Contents>
      </Wrap>
    </Container>
  );
};
