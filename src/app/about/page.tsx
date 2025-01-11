"use client";

import { useState, useEffect } from "react";
// import { BsAwardFill } from "react-icons/bs";
import Link from "next/link";
import Container from "@/app/_components/container";
import Age from "../_components/age";
// import { Age } from "@/app/components/Age";

export default function AboutPage() {
	return (
		<Container>
			<main className="min-h-fit mt-10 md:mt-16 mb-16">
				<div className="container mx-auto lg:px-10 md:px-10 px-0">
					{/* About Header */}
					<div className="mt-10 mb-16 md:mt-0">
						<section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
							<h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
								About Me
							</h1>
							<h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
								Here is a brief overview about me.{" "}
							</h4>
						</section>
					</div>

					{/* About Content */}
					<div className="mt-10 mb-16">
						<section>
							<p className="uppercase font-bold text-sm">
								SOME STATS ABOUT ME
							</p>
							<div className="flex flex-col mt-4">
								<div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
									<div className="py-2 inline-block min-w-full">
										<div className="overflow-x-auto">
											<table className="min-w-full">
												<tbody>
													{/* Current Age */}
													<tr className="bg-gray-100 dark:bg-slate-800 border-b dark:border-slate-800">
														<td
															colSpan={2}
															className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
															Current age
														</td>
														<td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
															<p className="w-">
																<Age />
															</p>
														</td>
													</tr>
													{/* Current City */}
													<tr className="bg-white dark:bg-transparent border-b dark:border-slate-800">
														<td
															colSpan={2}
															className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
															Current City
														</td>
														<td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
															Semarang, Indonesia
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Certifications */}
						<section className="mt-16">
							<p className="uppercase font-bold text-sm">
								Here My Certification Showcase
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
								{/* Certificate 1 */}
								<div className="p-4 border border-gray-200">
									<p className="tracking-[0.2em] font-bold flex items-center hover:text-blue-700 cursor-pointer">
										Front End Dev Certificate
										{/* <BsAwardFill className="ml-1" /> */}
									</p>
									<p className="text-xs tracking-4 mt-1">
										October, 2022
									</p>
									<p className="tracking-3 font-light text-sm mt-4 hover:text-blue-700">
										<Link href={"https://gamelab.id/"}>
											Gamelab.id &#8599;
										</Link>
									</p>
									<button className="mt-6 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition md:flex-row md:justify-center md:w-auto w-full">
										<Link
											href={
												"https://www.gamelab.id/certificate/GL1959969336"
											}>
											Certificate Details
										</Link>
									</button>
								</div>

								{/* Certificate 2 */}
								<div className="p-4 border border-gray-200">
									<p className="tracking-[0.2em] font-bold flex items-center hover:text-blue-700 cursor-pointer">
										Software Engineering Competency
										Certificate
										{/* <BsAwardFill className="ml-1" /> */}
									</p>
									<p className="text-xs tracking-4 mt-1">
										April, 2024
									</p>
									<p className="tracking-3 font-light text-sm mt-4 hover:text-blue-700">
										<Link href={"https://bnsp.go.id/"}>
											National Professional Certification
											Agency &#8599;
										</Link>
									</p>
									<button className="mt-6 py-3 px-5 text-[0.6em] uppercase font-bold tracking-4 border-[1.3px] border-gray-300 hover:border-blue-700 hover:text-blue-700 transition md:flex-row md:justify-center md:w-auto w-full">
										<Link href={"/certifications"}>
											Certificate Details
										</Link>
									</button>
								</div>
							</div>
						</section>
						{/* Profile */}
						<div className="mt-14">
							<header className="my-10 py-10 px-5 2xl:px-0 md:px-14 flex flex-col items-center 2xl:items-start">
								<img
									src="/assets/blog/authors/irfan.jpg"
									alt="Irfan Pic"
									className="w-40 rounded-full"
								/>
								<h2 className=" mt-4 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
									<Link href={"/"}>Irfan Nuha</Link>
								</h2>
								<p className="mt-4 text-gray-600 font-light underline underline-offset-2 uppercase tracking-[0.3rem]  text-xs decoration-dotted decoration-0 hover:no-underline hover:text-blue-700 transition  2xl:text-start">
									<Link
										href={
											"mailto:irfannuha@protonmail.com"
										}>
										irfannuha@protonmail.com
									</Link>
								</p>
							</header>
						</div>
					</div>
				</div>
			</main>
		</Container>
	);
}
