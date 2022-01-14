import { Box } from '@chakra-ui/react';
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import styles from './styles.module.css'

SwiperCore.use([Autoplay, Pagination, Navigation]);

export function SwipperSlider() {
  return (
    <Box
      as="article"
      mt={["1.25rem", null, "3.25rem"]}
    >
      <Swiper
        className={styles.swiper}
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
        <SwiperSlide className={styles.swiperSlide}>
          África
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          América
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Ásia
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Europa
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Oceania
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}