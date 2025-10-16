import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function UserGenerated({ data, generateUser }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(JSON.stringify(data, null, 2));
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<div className="z-10 relative flex flex-col mx-auto items-center mt-5 tracking-[0.2em] md:tracking-[0.3em] px-4">
			{generateUser && (
				<motion.div
					className="flex flex-col items-center mt-4"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.5,
						delay: 0.5,
					}}>
					<div className="flex flex-col md:flex-row gap-10 text-sm md:text-lg text-left leading-relaxed space-y-2 bg-black/60 backdrop-blur-xl p-4 rounded-xl text-white mb-5">
						<div className="flex flex-col justify-center items-center gap-5">
							<h2 className="text-2xl font-bold mb-4 text-center">
								User Profile
							</h2>
							<p className="mb-2 mx-auto w-fit">
								<img
									src={data?.results[0]?.picture?.large}
									alt="User"
									className="rounded-full w-30 lg:w-40 h-30 lg:h-40 border-4 border-gray-700 object-cover"
								/>
							</p>
							<div className="relative">
								<button
									onClick={handleCopy}
									className="cursor-pointer border-1 bg-black border-white rounded-lg text-sm p-2 hover:opacity-70 active:scale-105">
									Copy data
								</button>
								<AnimatePresence>
									{copied && (
										<motion.span
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs text-green-400">
											Copied!
										</motion.span>
									)}
								</AnimatePresence>
							</div>
						</div>
						<div>
							<p className="mb-2">
								<span className="font-semibold">Name:</span>{" "}
								{data?.results[0]?.name?.title}{" "}
								{data?.results[0]?.name?.first}{" "}
								{data?.results[0]?.name?.last}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Email:</span>{" "}
								{data?.results[0]?.email}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Phone:</span>{" "}
								{data?.results[0]?.phone}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Cell:</span>{" "}
								{data?.results[0]?.cell}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Location:</span>{" "}
								{data?.results[0]?.location?.street?.number}{" "}
								{data?.results[0]?.location?.street?.name},{" "}
								{data?.results[0]?.location?.city},{" "}
								{data?.results[0]?.location?.state},{" "}
								{data?.results[0]?.location?.country},{" "}
								{data?.results[0]?.location?.postcode}
							</p>
							<p className="mb-2">
								<span className="font-semibold">
									Coordinate:
								</span>{" "}
								{
									data?.results[0]?.location?.coordinates
										?.latitude
								}
								,{" "}
								{
									data?.results[0]?.location?.coordinates
										?.longitude
								}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Timezone:</span>{" "}
								{data?.results[0]?.location?.timezone?.offset},{" "}
								{
									data?.results[0]?.location?.timezone
										?.description
								}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Username:</span>{" "}
								{data?.results[0]?.login?.username}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Email:</span>{" "}
								{data?.results[0]?.email}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Phone:</span>{" "}
								{data?.results[0]?.phone}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Age:</span>{" "}
								{data?.results[0]?.dob?.age}
							</p>
							<p className="mb-2">
								<span className="font-semibold">
									Nationality:
								</span>{" "}
								{data?.results[0]?.nat}
							</p>
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
}
