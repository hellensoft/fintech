import { FC } from "react";
import PageIntro from "../components/PageIntro";

interface ISponsorsExhibitors {}

const SponsorsExhibitors: FC<ISponsorsExhibitors> = () => {
	return (
		<div>
			<PageIntro
				title="Sponsers and Exhibitors"
				description="Get in front of the FinTech community"
			/>
		</div>
	);
};

export default SponsorsExhibitors;
