import { FC } from "react";
import PageIntro from "../components/PageIntro";
import AboutFintech from "../components/AboutFintech";

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
