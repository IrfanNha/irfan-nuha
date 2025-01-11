"use client";

import { useState } from "react";
import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-800 ">
			<Container>
				<div className="py-6 flex items-center justify-between">
					{/* Logo or Name */}
					<div className="flex items-center">
						<h3 className="mr-2 text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left">
							Irfannh.{" "}
						</h3>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex flex-row space-x-6">
						<a
							href="/"
							className=" text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							Home
						</a>
						<a
							href="/about"
							className=" text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							About
						</a>
						<a
							href="/projects"
							className=" text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							Projects
						</a>
						<a
							href="/resume"
							className=" text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							Resume
						</a>
					</div>
					<ThemeSwitcher />

					{/* Hamburger Button for Mobile */}
					<button
						onClick={toggleMenu}
						className={`lg:hidden text-black dark:text-white focus:outline-none transition-transform duration-300 ${
							isMenuOpen ? "rotate-90" : ""
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-8 h-8">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`border border-b-slate-300 dark:border-0 lg:hidden absolute left-0 w-full bg-neutral-50 dark:bg-slate-800 transition-all duration-300 ${
						isMenuOpen
							? "opacity-100 translate-y-0 pointer-events-auto"
							: "opacity-0 translate-y-4 pointer-events-none"
					}`}>
					<div className="flex flex-col space-y-4 mt-4 pb-4">
						<a
							href="/"
							className="ml-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							Home
						</a>
						<a
							href="/about"
							className="ml-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							About
						</a>
						<a
							href="/home"
							className="ml-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							Projects
						</a>
						<a
							href="/resume"
							className="ml-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200">
							Resume
						</a>
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Navbar;
