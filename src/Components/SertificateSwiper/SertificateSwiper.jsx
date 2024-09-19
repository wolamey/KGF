import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import Slider from '../Slider/Slider';

import './SertificateSwiper.scss';

import sertificate1 from '../../assets/sertificate1.png';
import sertificate2 from '../../assets/sertificate2.png';
import sertificate3 from '../../assets/sertificate3.png';
import sertificate4 from '../../assets/sertificate4.png';
import sertificate5 from '../../assets/sertificate5.png';
import sertificate6 from '../../assets/sertificate6.png';

export default function SertificateSwiper() {
  const images = [sertificate1, sertificate2];
  return (
    <Swiper
      effect={'slide'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={window.innerWidth < 1024 ? 1 : 3}
      spaceBetween={30}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 0,
        slideShadows: true,
      }}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="init_container">
        <img src={sertificate6} alt="" />
      </SwiperSlide>
      <SwiperSlide className="init_container">
        <img src={sertificate2} alt="" />
      </SwiperSlide>
      <SwiperSlide className="init_container">
        <img src={sertificate3} alt="" />
      </SwiperSlide>
      <SwiperSlide className="init_container">
        <img src={sertificate4} alt="" />
      </SwiperSlide>
      <SwiperSlide className="init_container">
        <img src={sertificate1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="init_container">
        <img src={sertificate5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
