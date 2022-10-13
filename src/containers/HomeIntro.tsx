import { FC } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
// import { Navigation, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

interface IHomeIntro {}

const HomeIntro: FC<IHomeIntro> = () => {
	// const navigationPrevRef = useRef(null);
	// const navigationNextRef = useRef(null);

	return (
		<div className="relative">
			<video
				className="absolute -z-20 w-full object-cover object-center h-full top-0 left-0"
				loop
				autoPlay
			>
				<source src="/videos/home-intro-video.webm" type="video/webm" />
			</video>
			<div className="bg-blueTransparent">
				<SectionWrapper>
					<div className="grid grid-cols-2 gap-8 py-24">
						{/* <div>
							<Swiper
								modules={[Navigation, Autoplay]}
								loop={true}
								slidesPerView={1}
								autoplay={{ delay: 2000 }}
							>
								<SwiperSlide>Slide 1</SwiperSlide>
								<SwiperSlide>Slide 2</SwiperSlide>
								<SwiperSlide>Slide 3</SwiperSlide>
								<SwiperSlide>Slide 4</SwiperSlide>
							</Swiper>
							<div ref={navigationPrevRef}>prev</div>
							<div ref={navigationNextRef}>next</div>
						</div> */}
						<div>
							<h1 className="text-3xl font-semibold text-white">
								FinTech Festival Tanzania 2023
							</h1>
							<p className="my-8 max-w-lg font-medium text-[#fffe]">
								Whether you are a start-up, technology company,
								investor, financial institution, research
								institute, or innovation professional, it will
								play a pivotal role in further strengthening the
								ecosystem and enhancing collaboration between
								Tanzania & Global FinTech.
							</p>
							<Link
								className="font-medium bg-greenPrimary hover:bg-bluePrimary duration-300 py-3 px-6 rounded-md text-white"
								to="/register"
							>
								Register
							</Link>
						</div>
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
};

export default HomeIntro;
