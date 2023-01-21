import { FC } from "react";
import OtherPricingDetails from "../components/OtherPricingDetails";
import PageIntro from "../components/PageIntro";
import PartnerPackage from "../components/PartnerPackage";
import PlatinumSponser from "../components/PlatinumSponser";
import SponsorBenefits from "../components/SponsorBenefits";
import WhySponser from "../components/WhySponser";

interface ISponsorsExhibitors {}

const SponsorsExhibitors: FC<ISponsorsExhibitors> = () => {
    return (
        <div>
            <PageIntro
                title="Sponsers and Exhibitors"
                description="Become a Sponsor or Exhibitor"
            />
            <SponsorBenefits />
            <PlatinumSponser />
            <PartnerPackage />
            <OtherPricingDetails />
            <WhySponser />
        </div>
    );
};

export default SponsorsExhibitors;
