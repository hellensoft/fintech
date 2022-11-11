import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

interface IWhoAttends {}

const WhoAttends: FC<IWhoAttends> = () => {
	const data = [
		{
			name: "Financial Professional",
			percentage: 23,
			color: "#29388c",
		},
		{
			name: "Consultant",
			percentage: 18,
			color: "#374f98",
		},
		{
			name: "Startup",
			percentage: 17,
			color: "#4262b1",
		},
		{
			name: "VC + Service Providers",
			percentage: 15,
			color: "#ffb603",
		},
		{
			name: "Other",
			percentage: 12,
			color: "#c1a712",
		},
		{
			name: "Data Provider",
			percentage: 7,
			color: "#839720",
		},
		{
			name: "Technologists",
			percentage: 5,
			color: "#47882f",
		},
		{
			name: "University",
			percentage: 3,
			color: "#08793d",
		},
	];
	const dataPie = {
		labels: data.map((el) => el.name),
		datasets: [
			{
				label: "# of Votes",
				data: data.map((el) => el.percentage),
				backgroundColor: data.map((el) => el.color),
			},
		],
	};

	return (
		<SectionWrapper>
			<div className="my-24">
				<h1 className="text-xl sm:text-3xl text-bluePrimary font-semibold mb-4 text-center">
					WHO ATTENDS
				</h1>
				<p className="text-grayText text-sm xs:text-base">
					Everyone is invited to participate. Previous attendees
					include a mix of entrepreneurs, senior financial services
					executives, Technologists; data providers, venture
					capitalists; academicians, regulators; and media members.
					They came from Africa and Asia, espe- cially from the states
					of Tanzania, South Africa, Uganda, Kenya, and Malawi.
				</p>
				<p className="text-grayText text-sm xs:text-base mt-3">
					The number of participants has been growing year by year,
					and in 2023 we have ambi- tious targets to engage a large
					number in the fintech ecosystem across East Africa.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-12 pt-16 max-w-[700px] mx-auto">
					<div>
						<Pie data={dataPie} />
					</div>
					<div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-1">
						{data.map((el, index) => (
							<div
								key={index}
								className="flex items-center space-x-2"
							>
								<div
									className={`h-3 xs:h-4 w-4 xs:w-6 bg-[${el.color}]`}
									style={{ backgroundColor: `${el.color}` }}
								/>
								<p className="text-xs xs:text-sm sm:text-base">
									{el.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default WhoAttends;
