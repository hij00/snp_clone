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
  background-color: lightgray;
  margin-top: 200px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
`;

const Contents = styled.div`
  /* width: 250px; */
`;

const ConWrap = styled.div`
  /* height: 300px; */
`;

const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: gold;
`;

const ConTitle = styled.div``;

const SlideWrap = styled.div`
  width: 70%;
`;

export const Section2 = ({ lovedData }) => {
  return (
    <Container>
      <Wrap>
        <TextWrap>
          <Title>Most Loved</Title>
          <Desc>Snp의 인기 제품들을 만나보세요.</Desc>
        </TextWrap>
        <SlideWrap>
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
        </SlideWrap>
      </Wrap>
    </Container>
  );
};
