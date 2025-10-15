import { useState } from "react";
import RandomUser from "./api/RandomUser";
import background from "./assets/background.jpg";
import Header from "./components/Header";
import UserGenerated from "./components/UserGenerated";

function App() {
	const { data } = RandomUser();
	const [GenerateUser, setGenerateUser] = useState(false);

	const handleClick = () => {
		setGenerateUser(true);
	};

	return (
		<main className="overflow-hidden">
			<img
				src={background}
				alt="Background"
				className="absolute w-full h-[100vh] lg:h-auto object-cover"
			/>
			<Header handleClick={handleClick}></Header>
			<UserGenerated
				data={data}
				generateUser={GenerateUser}></UserGenerated>
		</main>
	);
}

export default App;
