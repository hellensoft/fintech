import { FC } from "react";
import statistics from "../data/statics.json";

import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface IStatistics {}

const Statistics: FC<IStatistics> = () => {
    return (
        <div className="bg-bluePrimary">
            <div className="py-24 px-4">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    autoplay={{ delay: 2000 }}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    spaceBetween={40}
                >
                    {statistics.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="flex flex-col items-center"
                                key={index}
                            >
                                <h2 className="text-white font-semibold text-3xl sm:text-4xl">
                                    {data.number}
                                </h2>
                                <p className="text-[#fffe] font-medium text-sm lg:text-xl text-center mt-2">
                                    {data.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Statistics;
