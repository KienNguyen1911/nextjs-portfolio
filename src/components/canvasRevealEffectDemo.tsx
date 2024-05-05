"use client";
import React from "react";

import { AnimatePresence, color, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

export function CanvasRevealEffectDemo() {
	const listColor = [
		{
			colors: [[0, 255, 255]],
			icon: 'facebook',
			content: 'facebook.com/KienNguyen1911'
		},
		{
			colors: [[236, 72, 153], [232, 121, 249]],
			icon: 'linkedin',
			content: 'linkedin.com/in/kiennguyen1911'
		},
		{
			colors: [[125, 211, 252]],
			icon: 'phone',
			content: '09-6262-1911'
		},
	];
	return (
		<div className="pt-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
			{
				listColor.map((item, index) => (
					<div key={index}
						className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative">
						<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
						<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
						<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
						<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
						<AnimatePresence>
							<div className="h-full w-full absolute inset-0">
								<CanvasRevealEffect
									animationSpeed={3}
									containerClassName="bg-black"
									colors={
										item.colors
									}
									dotSize={2}
								/>
							</div>
						</AnimatePresence>
						<div className="relative z-20">
							<div className="flex flex-col text-center group-hover/canvas-card:-translate-y-4 transition duration-200 w-full  mx-auto flex items-center justify-center">
								{item.icon === 'facebook' ? <FacebookIcon /> : item.icon === 'linkedin' ? <LinkedinIcon /> : <PhoneIcon />}
								{item.content}
							</div>
						</div>
					</div>
				))
			}
		</div>
	);
}

const Card = ({
	title,
	icon,
	children,
}: {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
		>
			<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20">
				<div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
					{icon}
				</div>
				<h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
					{title}
				</h2>
			</div>
		</div>
	);
};

const AceternityIcon = () => {
	return (
		<svg
			width="66"
			height="65"
			viewBox="0 0 66 65"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
		>
			<path
				d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
				stroke="currentColor"
				strokeWidth="15"
				strokeMiterlimit="3.86874"
				strokeLinecap="round"
				style={{ mixBlendMode: "darken" }}
			/>
		</svg>
	);
};

const FacebookIcon = () => {
	return (
		<Image
			src="/brand-facebook.svg"
			width={140}
			height={70}
			alt="Facebook logo"
			className="flex-shrink-0 rounded-md shadow-2xl"
		/>
	)
}

const LinkedinIcon = () => {
	return (
		<Image
			src="/brand-linkedin.svg"
			width={140}
			height={70}
			alt="Linkedin logo"
			className="flex-shrink-0 rounded-md shadow-2xl"
		/>
	)
}

const PhoneIcon = () => {
	return (
		<Image
			src="/phone.svg"
			width={140}
			height={70}
			alt="Phone number"
			className="flex-shrink-0 rounded-md shadow-2xl"
		/>
	)
}

export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...rest}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
		</svg>
	);
};
