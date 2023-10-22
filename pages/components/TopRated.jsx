// import Swiper core and required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import RatingCard from "../Share/RatingCard";

const TopRated = ({ UpcomingMovieData, imageBaseUrl }) => {
  return (
    <>
    <p className="ratedTitleRated">{"TOP RATED"}</p>
    <div className="cardSwiping">
      <Swiper
        modules={[Autoplay, Scrollbar]}
        spaceBetween={18}
        slidesPerView={3}
        centeredSlides={false}
        // loop
        // autoplay={{
        //   delay: 800,
        //   disableOnInteraction: false,
        // }}
      >
        {UpcomingMovieData?.map((item) => {
          return (
            <>
              <SwiperSlide>
                <RatingCard item={item} imageBaseUrl={imageBaseUrl} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
    </>
  );
};

export default TopRated;
