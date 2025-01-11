import Container from "@/app/_components/container";

const educationData = [
	{
		title: "Software Engineering Vocational High School",
		school: "Semarang Vocational HS",
		year: "2024",
		link: "https://smkn9semarang.sch.id",
	},
	{
		title: "Associate Degree in Accounting (Equivalent to Indonesia's D3 program)",
		school: "Universitas Islam Sultan Agung",
		year: "undergraduated",
		link: "https://unissula.ac.id",
	},
];

const experienceData = [
	{
		position: "Front End Internship",
		company: "Gamelab.id",
		companyLink: "https://gamelab.id",
		period: "07/2022 - 10/2022",
		responsibilities: [
			"Contributed to the development of responsive user interfaces for e-commerce platforms.",
			"Improved user experience and ensured optimal usability across a wide range of devices and screen resolutions.",
			"Designed and developed intuitive and attractive user interfaces for web applications.",
		],
	},
	{
		position: "Full Stack Developer",
		company: "PT Adya Global Media",
		companyLink: "",
		period: "03/2023 - 07/2023",
		responsibilities: [
			"Performed regular maintenance and improvements for website functionality, including bug fixes and performance optimization.",
			"Managed databases and ensured efficient integration between frontend and backend, including reliable API development.",
			"Developed end-to-end web applications using Laravel, resulting in stable, scalable, and responsive applications.",
		],
	},
	{
		position: "Mid-Full Stack Web Developer",
		company: "Crocodic Studio",
		companyLink: "https://crocodic.com",
		period: "07/2022 - 10/2022",
		responsibilities: [
			"Monitored website performance and security, implementing best practices.",
			"Handled server maintenance and updates, ensuring stable operations.",
			"Optimized SEO and utilized analytics tools to track user behavior.",
		],
	},
];

export default function ResumePage() {
	return (
		<Container>
			<main className="min-h-fit mt-10 md:mt-16 mb-16">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					{/* About Header */}
					<div className="mt-10 mb-16 md:mt-0">
						<section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
							<h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
								Resume
							</h1>
						</section>
					</div>
					{/* Education Section */}
					<div className="w-full px-0 md:px-5 mt-8">
						<h2 className="text-2xl font-semibold mb-6 text-center ">
							Education
						</h2>
						{educationData.map((edu, index) => (
							<div key={index} className="mb-6">
								<p className="text-lg font-medium">
									{edu.title}
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-300">
									<a
										href={edu.link}
										target="_blank"
										rel="noopener noreferrer"
										className="font-medium dark:text-cyan-400 hover:underline decoration-2 transition-colors">
										{edu.school}
									</a>
									, {edu.year}
								</p>
							</div>
						))}
					</div>

					{/* Experience Section */}
					<div className="w-full px-0 md:px-5 mt-12">
						<h2 className="text-2xl font-semibold mb-6 text-center">
							Experience
						</h2>
						{experienceData.map((exp, index) => (
							<div key={index} className="mb-8">
								<p className="text-lg font-medium">
									{exp.position}
								</p>
								<p className="text-sm text-gray-700 dark:text-gray-300">
									<a
										href={exp.companyLink || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="text-slate-98 font-semibold dark:text-cyan-400 hover:underline decoration-2 transition-colors">
										{exp.company}
									</a>
								</p>
								<p className="text-sm text-gray-500">
									{exp.period}
								</p>
								<ul className="list-disc list-outside mt-2 pl-4">
									{exp.responsibilities.map(
										(responsibility, idx) => (
											<li
												key={idx}
												className="text-sm text-gray-600 dark:text-gray-400">
												{responsibility}
											</li>
										)
									)}
								</ul>
							</div>
						))}
					</div>
				</div>
			</main>
		</Container>
	);
}
