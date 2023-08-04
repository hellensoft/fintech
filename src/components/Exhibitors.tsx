import { FC, Key, useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapper from "./SectionWrapper";
import { graphqlFetcher } from "../utils";

interface IExhibitors {}

type Exhibitor = {
    sys: {
        id: string;
    };
    name: string;
    logo: {
        url: string;
    };
};

type ExhibitorsCollection = {
    items: Exhibitor[];
};

type Data = {
    exhibitorsCollection: ExhibitorsCollection;
};

const Exhibitors: FC<IExhibitors> = () => {
    const [exhibitors, setExhibitors] = useState<Exhibitor[]>([]);

    useEffect(() => {
        const getExhibitors = async () => {
            const data: Data = await graphqlFetcher(`
            {
                exhibitorsCollection {
                    items {
                        sys {
                            id
                        }
                        name
                        logo {
                            url
                        }
                    }
                }
            }`);

            setExhibitors(data.exhibitorsCollection.items);
        };

        getExhibitors();
    }, []);

    return (
        <SectionWrapper>
            <div className="py-24">
                <h1 className="text-2xl sm:text-3xl text-bluePrimary font-semibold mb-4 text-center">
                    Exhibitors
                </h1>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    autoplay={{ delay: 0 }}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    spaceBetween={40}
                >
                    {exhibitors.map(
                        (
                            exhibitor: any | null | undefined,
                            index: Key | null | undefined
                        ) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center px-8 sm:px-0 justify-center h-28">
                                    <img
                                        className=""
                                        src={exhibitor.logo.url}
                                        alt={exhibitor.name}
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </SectionWrapper>
    );
};

export default Exhibitors;
