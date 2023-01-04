import { FC } from "react";
import PageIntro from "../components/PageIntro";
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
            <WhySponser />
		</div>
	);
};

export default SponsorsExhibitors;
