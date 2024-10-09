import React, { useState } from 'react';
import Modal from 'react-modal';
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cross from '../../assets/cross.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import './SertificateSwiper.scss';

import sertificate1 from '../../assets/sertificate1.png';
import sertificate2 from '../../assets/sertificate2.png';
import sertificate3 from '../../assets/sertificate3.png';
import sertificate4 from '../../assets/sertificate4.png';
import sertificate5 from '../../assets/sertificate5.png';
import sertificate6 from '../../assets/sertificate6.png';


Modal.setAppElement('#root'); 

export default function SertificateSwiper() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    sertificate1, sertificate2, sertificate3,
    sertificate4, sertificate5, sertificate6
  ];

  const openModal = (index) => {
    setCurrentSlide(index);
    setIsOpen(true);
    document.querySelector('body').style.overflowY = 'hidden';
    
  };

  const closeModal = () =>{ setIsOpen(false);
    document.querySelector('body').style.overflowY = 'auto';

  };

  return (
    <>
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
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="init_container"
            onClick={() => openModal(index)}  
          >
            <img src={image} alt={`sertificate${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Sertificate Fullscreen"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-button"><img src={cross} alt="" /></button>
        <Swiper
          effect={'slide'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          initialSlide={currentSlide} 
          navigation={true}
       
          modules={[EffectCoverflow, Navigation]}
          className="fullscreenSwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="fullscreen-slide">
              <img src={image} alt={`fullscreen sertificate${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
}
