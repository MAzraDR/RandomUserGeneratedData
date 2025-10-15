import { useState } from "react";
import { motion } from "motion/react";

export default function UserGenerated({ data, generateUser }) {
	return (
		<div className="z-10 relative flex flex-col items-center mt-10 lg:mt-20 tracking-[0.2em] md:tracking-[0.3em] px-4">
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
					<div className="flex flex-col md:flex-row gap-5 text-sm md:text-lg text-left leading-relaxed space-y-2 bg-black/40 backdrop-blur-xl p-4 rounded-xl text-white md:max-w-[70vw]">
						<div className="flex flex-col justify-center">
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
								<span className="font-semibold">Username:</span>{" "}
								{data?.results[0]?.login?.username}
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
