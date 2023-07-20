import { FC, Fragment, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { openPhoneMenu } from "../recoil/atom";
import Header from "./Header";
import navigations from "../data/topNav.json";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

interface ISideBar {}

const SideBar: FC<ISideBar> = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useRecoilState(openPhoneMenu);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-30"
            >
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="ease-out duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className="fixed inset-y-0 right-0 flex items-center justify-between">
                        <Dialog.Panel className="h-full min-h-screen flex flex-col max-w-[400px] w-full bg-white">
                            <Header fixed />

                            <div className="flex flex-col justify-between flex-1">
                                <div className="ml-auto overflow-auto flex flex-col w-full 2lg:hidden items-center">
                                    {navigations.map((nav, index) => (
                                        <Fragment key={index}>
                                            {nav.multiple ? (
                                                <Menu key={index}>
                                                    {({ open }) => (
                                                        <>
                                                            <Menu.Button
                                                                className={`w-full py-2 px-4 border hover:text-greenPrimary font-medium focus:outline-none flex items-center justify-between ${
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
                                                                <span>
                                                                    {nav.name}
                                                                </span>
                                                                <BsChevronDown
                                                                    className={`ml-2 duration-300 ${
                                                                        open
                                                                            ? "rotate-180"
                                                                            : "rotate-0"
                                                                    }`}
                                                                />
                                                            </Menu.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition duration-100 ease-out"
                                                                enterFrom="transform scale-95 opacity-0"
                                                                enterTo="transform scale-100 opacity-100"
                                                                leave="transition duration-75 ease-out"
                                                                leaveFrom="transform scale-100 opacity-100"
                                                                leaveTo="transform scale-95 opacity-0"
                                                            >
                                                                <Menu.Items className="z-10 w-full">
                                                                    <div className="bg-white w-full border flex flex-col items-start divide-y">
                                                                        {nav.links?.map(
                                                                            (
                                                                                link,
                                                                                index
                                                                            ) => (
                                                                                <NavLink
                                                                                    key={
                                                                                        index
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
                                                                                    }) =>
                                                                                        `hover:text-greenPrimary font-medium text-bluePrimary hover:bg-[#eee] px-8 py-2 w-full ${
                                                                                            isActive &&
                                                                                            "bg-[#eee] text-bluePrimary"
                                                                                        }`
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        link.name
                                                                                    }
                                                                                </NavLink>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </>
                                                    )}
                                                </Menu>
                                            ) : (
                                                <NavLink
                                                    key={index}
                                                    to={nav.link || "/"}
                                                    end={nav.end}
                                                    className={({ isActive }) =>
                                                        `w-full py-2 px-4 border hover:text-greenPrimary font-medium text-bluePrimary ${
                                                            isActive &&
                                                            "text-greenPrimary"
                                                        }`
                                                    }
                                                >
                                                    {nav.name}
                                                </NavLink>
                                            )}
                                        </Fragment>
                                    ))}
                                    <Link
                                        className="font-medium bg-bluePrimary w-full hover:bg-greenPrimary duration-300 py-2 px-6 text-center text-white"
                                        to="/enquiry"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                                <div className="flex flex-col items-start p-4">
                                    <p className="text-sm text-grayText font-medium">
                                        Fintech Festival Africa 2023
                                    </p>
                                    <p className="text-sm text-grayText font-medium">
                                        08<sup>th</sup> - 09<sup>th</sup>{" "}
                                        November 2023
                                    </p>
                                    <p className="text-sm text-grayText font-medium">
                                        Julius Nyerere International Convention
                                        Center (JNICC)
                                    </p>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default SideBar;
