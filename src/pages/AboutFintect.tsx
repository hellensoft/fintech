import { FC } from "react";
import PageIntro from "../components/PageIntro";
import AboutFintech from "../components/AboutFintech";
// import SectionWrapper from "../components/SectionWrapper";

interface IAboutFintechPage {}

const AboutFintechPage: FC<IAboutFintechPage> = () => {
    return (
        <div className="">
            <PageIntro title="About Fintech Festival" description="All about fintech festival." />
            <AboutFintech />
        </div>
    );
};

export default AboutFintechPage;
