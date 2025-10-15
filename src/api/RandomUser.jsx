import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RandomUser() {
	const { data, error, isLoading } = useSWR(
		"https://randomuser.me/api/",
		fetcher
	);	

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;
	return { data };
}
