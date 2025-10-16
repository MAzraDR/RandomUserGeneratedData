import { useState } from "react";
import RandomUser from "./api/RandomUser";
import background from "./assets/background.jpg";
import Header from "./components/Header";
import UserGenerated from "./components/UserGenerated";
import Footer from "./components/Footer";

function App() {
	const { data, mutate } = RandomUser();
	const [GenerateUser, setGenerateUser] = useState(false);

	const handleClick = () => {
		setGenerateUser(true);
		mutate();
	};

	return (
		<main className="overflow-hidden relative">
			<img
				src={background}
				alt="Background"
				className="fixed top-0 left-0 w-full h-screen object-cover -z-10 brightness-80"
			/>
			<div className="bg-black/10 text-white lg:w-[80vw] w-[90vw] p-2 mt-20 mb-50 rounded-xl mx-auto backdrop-blur-md ">
				<Header handleClick={handleClick}></Header>
				<UserGenerated
					data={data}
					generateUser={GenerateUser}></UserGenerated>
			</div>
				<Footer></Footer>
		</main>
	);
}

export default App;
