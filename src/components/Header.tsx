import { FC, Fragment, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import SectionWrapper from "./SectionWrapper";
import navigations from "../data/topNav.json";
import { CgMenu } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { openPhoneMenu } from "../recoil/atom";
import { IoClose } from "react-icons/io5";

interface IHeader {
    fixed?: boolean;
}

const Header: FC<IHeader> = ({ fixed }) => {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const [openSideBar, setOpenSideBar] = useRecoilState(openPhoneMenu);

    useEffect(() => {
        const handler = () => {
            setScrolled((scrolled) => {
                if (
                    !scrolled &&
                    (document.body.scrollTop > 20 ||
                        document.documentElement.scrollTop > 20)
                ) {
                    return true;
                }

                if (
                    scrolled &&
                    document.body.scrollTop < 4 &&
                    document.documentElement.scrollTop < 4
                ) {
                    return false;
                }

                return scrolled;
            });
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    });

    return (
        <div
            className={`sticky top-0 border-b bg-[#fffe] backdrop-blur z-30 ${
                scrolled && "shadow-lg"
            }`}
        >
            <SectionWrapper>
                <div
                    className={`flex items-center justify-between ${
                        scrolled || fixed
                            ? "py-2 2lg:py-4"
                            : "py-2 sm:py-6 2lg:py-8"
                    } duration-200`}
                >
                    <div>
                        <Link to="/">
                            <img
                                className="h-12 md:h-16 w-auto"
                                src="/images/logo-words.png"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <button
                        onClick={() => setOpenSideBar(!openSideBar)}
                        className="ml-auto space-x-8 inline-block 2lg:hidden z-40"
                    >
                        {openSideBar ? (
                            <IoClose className="text-blackPrimary h-7 w-7" />
                        ) : (
                            <CgMenu className="text-blackPrimary h-7 w-7" />
                        )}
                    </button>
                    <div className="ml-auto space-x-5 2xl:space-x-8 hidden 2lg:flex items-center">
                        {navigations.map((nav, index) => (
                            <Fragment key={index}>
                                {nav.multiple ? (
                                    <Popover key={index} className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={`hover:text-greenPrimary font-medium focus:outline-none flex items-center ${
                                                        open ||
                                                        nav.links?.some(
                                                            (el) =>
                                                                el.link ===
                                                                pathname
                                                        )
                                                            ? "text-greenPrimary"
                                                            : "text-bluePrimary"
                                                    } duration-300`}
                                                >
                                                    <span>{nav.name}</span>
                                                    <BsChevronDown
                                                        className={`ml-1 duration-300 ${
                                                            open
                                                                ? "rotate-180"
                                                                : "rotate-0"
                                                        }`}
                                                    />
                                                </Popover.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    <Popover.Panel className="absolute z-10">
                                                        <div className="bg-white shadow-md rounded mt-4 w-auto min-w-[250px] border flex flex-col items-start divide-y">
                                                            {nav.links?.map(
                                                                (
                                                                    link,
                                                                    index
                                                                ) => (
                                                                    <Popover.Button
                                                                        as={
                                                                            NavLink
                                                                        }
                                                                        end={
                                                                            link.end
                                                                        }
                                                                        to={
                                                                            link.link ||
                                                                            "/"
                                                                        }
                                                                        className={({
                                                                            isActive,
                                                                        }: {
                                                                            isActive: boolean;
                                                                        }) =>
                                                                            `hover:text-greenPrimary font-medium text-bluePrimary hover:bg-[#eee] px-4 py-2 w-full ${
                                                                                isActive &&
                                                                                "bg-[#eee] text-greenPrimary"
                                                                            }`
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {
                                                                            link.name
                                                                        }
                                                                    </Popover.Button>
                                                                )
                                                            )}
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                ) : (
                                    <NavLink
                                        key={index}
                                        to={nav.link || "/"}
                                        end={nav.end}
                                        className={({ isActive }) =>
                                            `hover:text-greenPrimary font-medium text-bluePrimary ${
                                                isActive && "text-greenPrimary"
                                            }`
                                        }
                                    >
                                        {nav.name}
                                    </NavLink>
                                )}
                            </Fragment>
                        ))}
                        <Link
                            className="font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6 rounded-md text-white"
                            to="/enquiry"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Header;
