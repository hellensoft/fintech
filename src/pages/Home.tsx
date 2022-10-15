import { FC } from "react";
import Sponsers from "../components/Sponsers";
import Statistics from "../components/Statistics";
import HomeIntro from "../containers/HomeIntro";

interface IHome {}

const Home: FC<IHome> = () => {
    return (
        <div>
            <HomeIntro />
            <Statistics />
            <Sponsers />
        </div>
    )
}

export default Home