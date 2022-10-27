import { FC } from "react";
import PageIntro from "../components/PageIntro";
import ContactUs from "../components/ContactUs";

interface IContact {}

const Contact: FC<IContact> = () => {
	return (
		<div>
			<PageIntro title="Contact Us" description="Find us here" />
			<ContactUs />
			<div>
				<iframe
					title="location map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2077430225045!2d39.27751141493723!3d-6.744497295124466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d098b11cfd1%3A0xa38b89e66226abc4!2sBains%20Ave%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1666094573514!5m2!1sen!2stz"
					className="w-full h-auto aspect-square xs:aspect-[16/11] sm:aspect-[16-/8] lg:aspect-[16/5]"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default Contact;
