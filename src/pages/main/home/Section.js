import styled from "styled-components";

const SSection = styled.div`
  height: 80vh;
  background-color: lightblue;
`;
const Con = styled.div``;
const TextBox = styled.div`
  width: 800px;
  height: 80vh;
  background-color: white;
  position: absolute;
  right: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConText = styled.div`
  width: 500px;
  margin: 0 auto;
`;
const ConSubTitle = styled.div`
  color: lightpink;
  font-size: 14px;
  font-weight: 300;
`;

const ConTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin: 20px 0 60px 0;
`;
const ConDesc = styled.div`
  font-size: 14px;
  font-weight: 100;
  line-height: 18px;
`;
const ConBtn = styled.div``;

export const Section = () => {
  return (
    <>
      <SSection>
        <Con></Con>
        <TextBox>
          <ConText>
            <ConSubTitle>Snp UV PERPECT AIR TONE UP SUN CREAM</ConSubTitle>
            <ConTitle>
              가볍게 톤-업
              <br />
              핑크빛 에어 톤업 선크림
            </ConTitle>
            <ConDesc>
              입소문 스테디셀러, 바르는 순간 자연스럽게 톤-업
              <br /> 피부 답답함 없이 보송하게 흡수됩니다.
            </ConDesc>
            <ConBtn>더 보기</ConBtn>
          </ConText>
        </TextBox>
      </SSection>
    </>
  );
};
