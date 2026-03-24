import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop
    className="w-full aspect-[16/10] rounded-lg overflow-hidden"
  >
    {images.map((img, i) => (
      <SwiperSlide key={i}>
        <img src={img} alt={`${alt} ${i + 1}`} className="w-full h-full object-cover" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ImageSlider;
