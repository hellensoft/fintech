import { FC } from "react";
import Statistics from "../components/Statistics";
import HomeIntro from "../containers/HomeIntro";

interface IHome {}

const Home: FC<IHome> = () => {
    return (
        <div>
            <HomeIntro />
            <Statistics />
        </div>
    )
}

export default Home