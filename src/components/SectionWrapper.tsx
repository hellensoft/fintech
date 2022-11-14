import { FC, ReactNode } from "react";

interface ISectionWrapper {
	children: ReactNode;
}

const SectionWrapper: FC<ISectionWrapper> = ({ children }) => {
	return <div className="max-w-7xl px-4 mx-auto">{children}</div>;
};

export default SectionWrapper;
