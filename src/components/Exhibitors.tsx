import { FC, useEffect, useState } from "react";
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

    const grouped_list: Exhibitor[][] = [];

    for (let i = 0; i < exhibitors.length; i += 2) {
        grouped_list.push(exhibitors.slice(i, i + 2));
    }

    return (
        <SectionWrapper>
            <div className="py-24">
                <h1 className="text-2xl sm:text-3xl text-bluePrimary font-semibold mb-4 text-center">
                    Exhibitors
                </h1>
                <div className="py-8">
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
                        autoplay={{ delay: 1000 }}
                        fadeEffect={{
                            crossFade: true,
                        }}
                        spaceBetween={40}
                    >
                        {grouped_list.map(
                            (exhibitorGroup: Exhibitor[], index: number) => (
                                <SwiperSlide key={index}>
                                    <div className="grid gap-12 justify-items-center place-items-center items-center">
                                        {exhibitorGroup.map(
                                            (exhibitor: Exhibitor) => (
                                                <div className="relative flex items-center px-8 sm:px-0 justify-center h-28 group">
                                                    <img
                                                        className="w-auto h-auto"
                                                        src={exhibitor.logo.url}
                                                        alt={exhibitor.name}
                                                    />
                                                    <div className="hidden absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-2 group-hover:block">
                                                        {exhibitor.name}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Exhibitors;
