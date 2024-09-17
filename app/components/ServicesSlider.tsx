import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

const ServicesSlider: React.FC = () => {
  return (
    <div id="services" className="text-center mt-20 mb-18 bg-slate-50 p-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasze usługi</h2>
      <p className="text-lg text-gray-700 mb-10">
        Oferujemy szeroki zakres usług medycznych i estetycznych, które poprawią Twoje zdrowie i urodę:
      </p>
      <div className="relative w-full overflow-hidden px-4">
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={2} // Show 2 slides at a time
          loop
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="slide-content border border-gray-300 rounded-lg p-4 w-full max-w-[calc(50%-20px)]">
                <img src="images/aging.jpg" alt="Usługa" className="w-full h-40 object-cover mb-4" />
                <p className="text-xl font-semibold text-gray-800 mb-2">Nazwa usługi {index}</p>
                <p className="text-gray-600 mb-2">
                  <strong>Opis:</strong> Opis usługi {index}.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSlider;
