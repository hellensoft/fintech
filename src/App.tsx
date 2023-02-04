import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./containers/Layout";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SponsorsExhibitors from "./pages/SponsorsExhibitors";
import Enquiry from "./pages/Enquiry";
import Awards from "./pages/Award";
import SingleAward from "./pages/SingleAward";
import ApplySpeaker from "./pages/ApplySpeaker";
import ApplySponsor from "./pages/ApplySponsor";
import AboutFintechPage from "./pages/AboutFintect";
import MediaGallery from "./pages/MediaGallery";
import BookingSpace from "./pages/BookingSpace";

interface IApp {}

const App: FC<IApp> = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <RecoilRoot>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* <Route path="/about-us" element={<AboutUs />} /> */}
                        <Route
                            path="/about/fintech-festival"
                            element={<AboutFintechPage />}
                        />
                        <Route path="/about/our-team" element={<AboutUs />} />
                        <Route
                            path="/apply-speaker"
                            element={<ApplySpeaker />}
                        />
                        <Route
                            path="/apply-sponsor"
                            element={<ApplySponsor />}
                        />
                        <Route path="/awards" element={<Awards />} />
                        <Route path="/awards/:id" element={<SingleAward />} />
                        <Route path="/enquiry" element={<Enquiry />} />
                        <Route
                            path="/sponsors-exhibitors"
                            element={<SponsorsExhibitors />}
                        />
                        <Route
                            path="/media-gallery"
                            element={<MediaGallery />}
                        />
                        <Route path="/book-space" element={<BookingSpace />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;

// TOO: add boooking page for tickets page}
