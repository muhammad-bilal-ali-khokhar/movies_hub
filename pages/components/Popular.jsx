// import Swiper core and required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Popular = ({ popularData, imageBaseUrl }) => {
  return (
    <div className="swiperCard ">
      <Swiper
        modules={[Autoplay, Scrollbar]}
        spaceBetween={1}
        slidesPerView={1}
        centeredSlides={false}
        // loop
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
      >
        {popularData?.map((item) => {
          return (
            <>
              <SwiperSlide>
                <div className="relative flex fullImage">
                  <div className="w-full h-screen">
                    <Image
                      src={`${imageBaseUrl}${item.poster_path}`}
                      height={100}
                      width={700}
                      alt=""
                    />
                  </div>
                  <div className="swippertitles">
                    <span>{item.original_title}</span>
                    <br />
                    <span>{item.overview}</span>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Popular;
