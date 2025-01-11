import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<div className="w-full">
						<h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-1/2">
							Irfan Nuha A.
						</h3>
						<Link href={"mailto:irfannuha@protonmail.com"}>
							<h4 className="text-center lg:text-left mb-10 lg:mb-0">
								irfannuha@protonmail.com
							</h4>
						</Link>
					</div>

					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
						<a
							href="mailto:irfannuhaa@protonmail.com"
							className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
							Contact Me
						</a>
						<a
							href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
							className="mx-3 font-bold hover:underline">
							View My Projects
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
