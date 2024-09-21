import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Pagination } from 'swiper';

const ServicesSlider: React.FC = () => {
  return (
    <div className="text-center bg-slate-50 rounded-b-lg">
      <Swiper
        spaceBetween={0}
        slidesPerView={'auto'}
        pagination={{ 
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{ height: '400px' }} >

        <SwiperSlide className="relative flex items-end justify-center h-full">
          <img src="images/aesthetical.jpg" alt="Usługa" className="w-full h-full object-cover rounded-b-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg text-white p-4 pb-6 text-center">
            <p className="text-xl font-semibold">Medycyna estetyczna</p>
            <p>Procedury poprawiające wygląd i zdrowie skóry.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative flex items-end justify-center h-full">
          <img src="images/aging.jpg" alt="Usługa" className="w-full h-full object-cover rounded-b-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg text-white p-4 pb-6 text-center">
            <p className="text-xl font-semibold">Medycyna anti-aging</p>
            <p>Technologie i metody przeciwdziałające starzeniu się.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative flex items-end justify-center h-full">
          <img src="images/chinese.jpg" alt="Usługa" className="w-full h-full object-cover rounded-b-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg text-white p-4 pb-6 text-center">
            <p className="text-xl font-semibold">Medycyna chińska</p>
            <p>Tradycyjne metody leczenia i zdrowia z Chin.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative flex items-end justify-center h-full">
          <img src="images/rheumatology.jpg" alt="Usługa" className="w-full h-full object-cover rounded-b-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg text-white p-4 pb-6 text-center">
            <p className="text-xl font-semibold">Reumatologia</p>
            <p>Nowoczesne metody leczenia schorzeń reumatycznych.</p>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination-container"></div>
      </Swiper>

      <style jsx>{`

        .swiper-pagination {
          display: flex;
          justify-content: center;
        }

        .swiper-pagination-bullet {
          background-color: #cbd5e0;
          width: 7px;
          height: 7px;
        }

        .swiper-pagination-bullet-active {
          background-color: #475569;
        }

        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ServicesSlider;
