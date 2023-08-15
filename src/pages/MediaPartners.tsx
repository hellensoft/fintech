import MediaPartnersList from "../components/MediaPartnersList";
import PageIntro from "../components/PageIntro";

const MediaPartners = () => {
    return (
        <div className="">
            <PageIntro
                title="Media Partners"
                description="All media partners available"
            />
            <MediaPartnersList />
        </div>
    );
};

export default MediaPartners;
