import { Link } from "react-router-dom";
import styled from "styled-components";

const SMainBanner = styled.div`
  height: 100vh;
`;
const TextWrap = styled.div`
  width: 500px;
  position: absolute;
  left: 120px;
  bottom: 100px;
`;
const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 80px;
`;
const Desc = styled.div`
  font-size: 14px;
  font-weight: 900;
  margin: 25px 0 25px 0;
`;
const BtnWrap = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid black;
  line-height: 50px;
  text-align: center;

  &:hover {
    background-color: #1d1d1d;
    transition: 0.5s;
    color: white;
    a:hover {
      color: white;
      font-weight: 100;
    }
  }
`;
const Btn = styled.div``;

export const MainBanner = () => {
  return (
    <>
      <Link to={"/item"}>
        <SMainBanner>
          <TextWrap>
            <Title>Gold Collagan Eye Patch</Title>
            <Desc>연약한 눈가 관리, 이제 자극없이 패치하세요</Desc>
            <BtnWrap>
              <Link to={"/item"}>
                <Btn>VIEW MORE</Btn>
              </Link>
            </BtnWrap>
          </TextWrap>
        </SMainBanner>
      </Link>
    </>
  );
};
