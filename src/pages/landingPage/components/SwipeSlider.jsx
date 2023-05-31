import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import styled from 'styled-components';

const SwipeSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]} //lazu
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}>
      <SwiperSlide>
        <Image src="./food1-prueba.jpg" alt="" loading='lazy'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./food2-pueba.jpg" alt="" loading='lazy'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./food3-prueba.jpg" alt="" loading='lazy'/>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwipeSlider

const Image = styled.img`
  height: 75vh;
  max-height: 800px;
`