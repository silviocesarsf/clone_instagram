import React from "react";
import { Section } from "../styles/Section/Section";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";

const Home = () => {
	return (
		<Section>
			<Stories />
			<Posts />
			<Posts />
			<Posts />
			<Posts />
		</Section>
	);
};

export default Home;
