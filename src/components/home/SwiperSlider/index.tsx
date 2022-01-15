import { Box } from '@chakra-ui/react';
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

SwiperCore.use([Autoplay, Pagination, Navigation]);

export function SwiperSlider() {
  return (
    <Box
      as="article"
      mt={["1.25rem", null, "3.25rem"]}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        // autoplay={{
        //   delay: 7000,
        //   disableOnInteraction: false
        // }}
        pagination={{
          "clickable": true
        }}
      >
        <SwiperSlide>
          África
        </SwiperSlide>
        <SwiperSlide>
          América
        </SwiperSlide>
        <SwiperSlide>
          Ásia
        </SwiperSlide>
        <SwiperSlide>
          Europa
        </SwiperSlide>
        <SwiperSlide>
          Oceania
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}