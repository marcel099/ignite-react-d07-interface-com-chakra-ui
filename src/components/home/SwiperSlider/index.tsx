import { Box } from '@chakra-ui/react';
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useEffect, useState } from 'react';

import { api } from '../../../services/axios'

SwiperCore.use([Autoplay, Pagination, Navigation]);

type Continent = {
  id: string
  name: string
}

// type SwiperSliderProps = {
//   continents: Continent[]
// }

export function SwiperSlider(/*{  continents }: SwiperSliderProps*/) {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    async function getContinents() {
      const response = await api.get('continents')

      console.log(response)
      setContinents(response.data.continents)
    }

    getContinents()
  }, [])

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
        { continents.map(({ id, name }) => (
          <SwiperSlide key={id}>{name}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}