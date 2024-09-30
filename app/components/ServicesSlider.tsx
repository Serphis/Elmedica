import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Pagination } from 'swiper';

const ServicesSlider: React.FC = () => {
  return (
    <div className="text-center bg-slate-50 rounded-b-lg md:rounded-b-none md:rounded-br-lg">
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
        className="mySwiper" >

        <SwiperSlide className="flex justify-center rounded-b-lg md:rounded-b-none md:rounded r-lg">
          <img src="images/aesthetical.webp" alt="Usługa" className="h-48 md:h-96 w-full object-cover rounded-b-lg md:rounded-b-none md:rounded-r-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 pb-6 text-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <p className="text-base md:text-xl font-semibold">Medycyna estetyczna</p>
            <p className='text-sm md:text-base'>Procedury poprawiające wygląd i zdrowie skóry.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
          <img src="images/aging.webp" alt="Usługa" className="h-48 md:h-96 w-full object-cover rounded-b-lg md:rounded-b-none md:rounded-r-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 pb-6 text-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <p className="text-base md:text-xl font-semibold">Medycyna anti-aging</p>
            <p className='text-sm md:text-base'>Technologie i metody przeciwdziałające starzeniu się.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
          <img src="images/chinese.webp" alt="Usługa" className="h-48 md:h-96 w-full object-cover rounded-b-lg md:rounded-b-none md:rounded-r-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 pb-6 text-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <p className="text-base md:text-xl font-semibold">Medycyna chińska</p>
            <p className='text-sm md:text-base'>Tradycyjne metody leczenia z Chin.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
          <img src="images/rheumatology.webp" alt="Usługa" className="h-48 md:h-96 w-full object-cover rounded-b-lg md:rounded-b-none md:rounded-r-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 pb-6 text-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <p className="text-base md:text-xl font-semibold">Reumatologia</p>
            <p className='text-sm md:text-base'>Nowoczesne metody leczenia schorzeń reumatycznych.</p>
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
