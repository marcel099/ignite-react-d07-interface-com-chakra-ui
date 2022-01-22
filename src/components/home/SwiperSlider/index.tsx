import Link from 'next/link';
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
  carouselImageUrl: string
}

// type SwiperSliderProps = {
//   continents: Continent[]
// }

export function SwiperSlider(/*{  continents }: SwiperSliderProps*/) {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    async function getContinents() {
      const response = await api.get('/continents')

      setContinents(response.data.continents)
    }

    getContinents()
  }, [])

  return (
    <Box
      as="article"
      mt={["1.25rem", null, "3.25rem"]}
      position="relative"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false
        }}
        pagination={{
          "clickable": true
        }}
      >
        { continents.map(({ id, name, carouselImageUrl }) => (
          <SwiperSlide key={id}>
            <Box
              position="relative"
              w="100%"
              h="100%"
            >
              <Link href={`/continent/${id}`}>
                <Box
                  as="a"
                  href={`/continent/${id}`}
                  w="90%"
                  h="100%"
                >
                  <Box
                    display="grid"
                    placeItems="center"

                    h="100%"
  
                    position="absolute"
                    left={0}
                    right={0}

                    background={`url(${carouselImageUrl})`}
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                  >
                    <Box
                      as="strong"
                      zIndex={0}
                      fontWeight={700}
                      fontSize="3rem"
                      color="gray.50"
                    >
                      {name}
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}