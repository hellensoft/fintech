import { FC } from "react";
import PageIntro from "../components/PageIntro";
import AboutFintech from "../components/AboutFintech";

interface IAboutFintechPage {}

const AboutFintechPage: FC<IAboutFintechPage> = () => {
    return (
        <div className="">
            <PageIntro title="Fintech Festival Tanzania" description="Know about Fintech Festival" />
            <AboutFintech />
        </div>
    );
};

export default AboutFintechPage;
