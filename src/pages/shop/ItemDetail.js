import styled from "styled-components";
import { Container } from "../../components/Container";

const SectionMain = styled.div`
  display: flex;
`;

const Img = styled.div`
  width: 50%;
  height: 100vh;
  background-color: white;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 150px 100px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 900;
`;

const Desc = styled.ul`
  justify-content: first baseline;
  width: 400px;
  li {
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
  }
`;

const Items = styled.div``;

const Item = styled.div``;

export const ItemDetail = () => {
  return (
    <Container>
      <SectionMain>
        <Img></Img>
        <TextWrap>
          <Title>듀얼 팝 컴포트 아이패치</Title>
          <Desc>
            <li>소비자가</li>
            <li>판매가</li>
            <li>배송방법</li>
            <li>배송비</li>
          </Desc>
          <Items>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Items>
        </TextWrap>
      </SectionMain>
    </Container>
  );
};
