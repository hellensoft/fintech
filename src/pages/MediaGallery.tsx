import { FC } from "react";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";

interface IMediaGallery {}

const videosUrls = [
    "nMhvMPu0UcU",
    "Ca9YIPHB6fw",
    "ZelIc9ub6P4",
    "KyFeMbXHv78",
    "HwZCPtNfefY",
    "4H2Bt6p3pJU",
    "QbymAgM8InE",
];

const MediaGallery: FC<IMediaGallery> = () => {
    return (
        <div>
            <PageIntro
                title="Media and Gallery"
                description="Photos and Videos"
            />
            <SectionWrapper>
                <div className="py-10 lg:py-16 grid xs:grid-cols-2 md:grid-cols-3 gap-6">
                    {videosUrls.map((url, index) => (
                        <div key={index}>
                            <div className="w-full aspect-[16/11] h-auto">
                                <iframe
                                    className="w-full h-full"
                                    title="fintech"
                                    src={`https://www.youtube.com/embed/${url}?controls=0`}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default MediaGallery;
