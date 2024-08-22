"use client";
import { useState } from "react";
import { Moon, Phone, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../elements/Logo";

interface navText {
	href: string;
	text: string;
}

const navMenu: navText[] = [
	{ href: "#home", text: "Home" },
	{ href: "#reviews", text: "Reviews" },
	{ href: "#article", text: "Article" },
	{ href: "#cast", text: "Cast" },
];

const NavBar: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="w-11/12 h-[8rem] flex justify-between items-center">
			<Logo />

			{/* Mobile and tablet view */}
			<div className="md:w-6/12 md:hidden flex items-center px-3 gap-5 md:px-1">
				<div>
					<Phone />
				</div>
				<div className="flex flex-col">
					<div
						className="flex flex-col justify-between w-6 h-5 cursor-pointer"
						onClick={() => setToggleMenu(!toggleMenu)}
					>
						{toggleMenu ? (
							<X size={20} className="text-deadpool-primary" />
						) : (
							<>
								<span className="block w-full h-[2px] bg-deadpool-primary rounded" />
								<span className="block w-4/6 h-[2px] bg-deadpool-primary rounded ml-auto" />
								<span className="block w-full h-[2px] bg-deadpool-primary rounded" />
							</>
						)}
					</div>
					{toggleMenu && (
						<div className="flex flex-col mt-2 bg-deadpool-neutral rounded-md shadow-lg absolute top-20 right-8 w-15">
							<ul className="flex flex-col gap-2 p-3">
								{navMenu.map(({ href, text }, idx) => (
									<li key={idx}>
										<Link href={href}>{text}</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>

			{/* Mid to larger viewport */}
			<div className="hidden w-6/12 md:flex justify-end items-center gap-5 pr-2">
				<ul className="w-6/12 flex flex-row justify-between gap-3 p-3">
					{navMenu.map(({ href, text }, idx) => (
						<li key={idx}>
							<Link href={href}>{text}</Link>
						</li>
					))}
				</ul>
				<Button variant="secondary" className="rounded-full">
					Contact
				</Button>
			</div>
		</div>
	);
};

export default NavBar;
