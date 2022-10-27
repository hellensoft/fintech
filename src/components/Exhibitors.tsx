import { FC, Key } from "react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapper from "./SectionWrapper";
import data from "../data/exhibitors.json";

interface IExhibitors {}

const Exhibitors: FC<IExhibitors> = () => (
	<SectionWrapper>
		<div className="py-24">
			<h1 className="text-3xl text-bluePrimary font-semibold mb-4 text-center">
				Exhibitors
			</h1>
			<Swiper
				modules={[Autoplay]}
				loop={true}
				slidesPerView={6}
				autoplay={{ delay: 2000 }}
				fadeEffect={{
					crossFade: true,
				}}
                spaceBetween={40}
			>
				{data.map(
					(
						data: any | null | undefined,
						index: Key | null | undefined
					) => (
						<SwiperSlide key={index}>
							<div className="flex items-center justify-center h-28">
								<img
									className=""
									src={data.image}
									alt={data.name}
								/>
							</div>
						</SwiperSlide>
					)
				)}
			</Swiper>
		</div>
	</SectionWrapper>
);

export default Exhibitors;
