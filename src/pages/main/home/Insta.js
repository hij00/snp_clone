import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../../components/Container";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const Text = styled.div`
  font-size: 70px;
  font-weight: 900;
  margin-bottom: 50px;
  margin-top: 150px;
`;
const Site = styled.div``;
const ImgCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 2880px; */
  overflow: hidden;
`;
const ImgWrap = styled.div`
  /* width: 300px; */
`;

const Img = styled.div`
  height: 300px;
  background-color: gold;
  /* margin-right: 20px; */
`;

export const Insta = ({ instaData }) => {
  return (
    <>
      <Container>
        <Text>We are on Instagram</Text>
        <Site></Site>
      </Container>
      <Swiper modules={[Scrollbar]} spaceBetween={30} slidesPerView={5}>
        <ImgCon>
          {instaData.map((insta) => (
            <SwiperSlide key={insta.id}>
              <ImgWrap>
                <Img>{insta.img}</Img>
              </ImgWrap>
            </SwiperSlide>
          ))}
        </ImgCon>
      </Swiper>
    </>
  );
};
