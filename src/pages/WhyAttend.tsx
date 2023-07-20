import { FC } from "react";
import PageIntro from "../components/PageIntro";
import WhoAttends from "../components/WhoAttends";
import WhoWillMeet from "../components/WhoWillMeet";

interface IWhyAttend {}

const WhyAttend: FC<IWhyAttend> = () => {
    return (
        <div>
            <PageIntro
                title="Why Attend"
                description="The 2023 Fintech Festival will be held on November 08-09, 2023."
            />
            <WhoAttends />
            <WhoWillMeet />
        </div>
    );
};

export default WhyAttend;
