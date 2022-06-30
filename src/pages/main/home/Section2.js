import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../../components/Container";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrap = styled.div`
  width: 500px;
  height: 480px;
  background-color: gray;
  position: absolute;
  top: 195vh;
  left: 110px;
  z-index: 999;
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
  width: 100%;
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
  margin-top: 50px;
`;

export const Section2 = ({ lovedData }) => {
  return (
    <Container>
      <Wrap>
        <TextWrap>
          <Title>Most Loved</Title>
          <Desc>Snp의 인기 제품들을 만나보세요.</Desc>
        </TextWrap>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={3}
        >
          <Contents>
            {lovedData.map((loved) => (
              <SwiperSlide key={loved.id}>
                <Link to={"/item"}>
                  <ConWrap>
                    <Con></Con>
                    <ConTitle>{loved.title}</ConTitle>
                  </ConWrap>
                </Link>
              </SwiperSlide>
            ))}
          </Contents>
        </Swiper>
      </Wrap>
    </Container>
  );
};
