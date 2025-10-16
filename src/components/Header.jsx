import { motion } from "motion/react";

export default function Header({ handleClick }) {
	const title = "Random Data Generator".split("");
	const description =
		"Generate random user data for testing and development purposes.".split(
			""
		);

	return (
		<header className="z-10 relative flex flex-col items-center mt-5 lg:mt-5 tracking-[0.2em] md:tracking-[0.3em] px-4">
			<motion.h1
				className="text-3xl md:text-5xl lg:text-7xl font-bold text-center"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.1,
							delayChildren: 0.5,
						},
					},
				}}
				initial="hidden"
				animate="visible">
				{title.map((wordText, i) => (
					<motion.span
						key={i}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						whileHover={{
							scale: 1.1,
							color: "#807D7D",
							transition: { duration: 0.3 },
						}}
						className="inline-block mr-2 cursor-pointer">
						{wordText}
					</motion.span>
				))}
			</motion.h1>
			<motion.div
				className="flex flex-wrap justify-center mt-4"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.05,
							delayChildren: 1,
						},
					},
				}}
				initial="hidden"
				animate="visible">
				{description.map((letter, i) => (
					<motion.span
						key={i}
						variants={{
							hidden: { opacity: 0, y: 10 },
							visible: { opacity: 1, y: 0 },
						}}
						className="text-md md:text-lg lg:text-xl">
						{letter === " " ? "\u00A0" : letter}
					</motion.span>
				))}
			</motion.div>

			<motion.div
				className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly md:w-[80vw] lg:w-[70vw] my-10 lg:bg-transparent p-4 rounded-xl"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					ease: "easeInOut",
					duration: 1,
					delay: 2.5,
				}}>
				<p className="w-2/3 lg:w-1/3 text-md md:text-xl font-medium mb-6 text-white text-center lg:text-left">
					<span className="block font-bold text-xl">
						Disclaimer :
					</span>
					this text is based on random data, not an actual person
				</p>
				<button
					onClick={handleClick}
					className="lg:w-1/3 w-2/3 bg-black text-white border-white border-1 rounded-xl py-3 text-sm md:text-xl cursor-pointer hover:opacity-80 transition-opacity active:scale-95">
					Generate Data
				</button>
			</motion.div>
		</header>
	);
}
