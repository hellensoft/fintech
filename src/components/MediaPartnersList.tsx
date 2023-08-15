import { FC, Key, useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { graphqlFetcher } from "../utils";

type IMediaPartner = {
    sys: {
        id: string;
    };
    name: string;
    logo: {
        url: string;
    };
};

type MediaPartnerCollection = {
    items: IMediaPartner[];
};

type Data = {
    mediaPartnersCollection: MediaPartnerCollection;
};

const MediaPartnersList: FC = () => {
    const [mediaPartners, setMediaPartners] = useState<IMediaPartner[]>([]);

    useEffect(() => {
        const getMediaPartnersList = async () => {
            const data: Data = await graphqlFetcher(`
            {
                mediaPartnersCollection {
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

            setMediaPartners(data.mediaPartnersCollection.items);
        };

        getMediaPartnersList();
    }, []);

    return (
        <SectionWrapper>
            <div className="py-24 grid grid-cols-4 gap-8">
                {mediaPartners.map(
                    (
                        exhibitor: any | null | undefined,
                        index: Key | null | undefined
                    ) => (
                        <div className="relative flex items-center px-8 sm:px-0 justify-center h-28 group">
                            <img
                                className="object-contain w-full h-full"
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
        </SectionWrapper>
    );
};

export default MediaPartnersList;
