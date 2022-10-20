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
					<div className="max-w-[900px] mx-auto py-40">
						<div className="text-center">
							<h1 className="text-xl font-semibold text-white">
								24th - 25th August 2023
							</h1>
							<h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">
								FinTech Festival Tanzania 2023
							</h1>
							<p className="my-4 mb-8 max-w-2xl mx-auto font-medium text-[#fffe]">
								Whether you are a start-up, technology company,
								investor, financial institution, research
								institute, or innovation professional, it will
								play a pivotal role in further strengthening the
								ecosystem and enhancing collaboration between
								Tanzania & Global FinTech.
							</p>
							<Link
								className="font-medium bg-greenPrimary hover:bg-bluePrimary duration-300 py-3 px-12 rounded-md text-white"
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
