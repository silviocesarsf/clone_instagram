import React from "react";
import { Section } from "../styles/Section/Section";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import Sugestions from "../components/Sugestions/Sugestions";

const Home = () => {
	return (
		<Section>
			<Sugestions />
			<Stories />
			<Posts />
			<Posts />
			<Posts />
			<Posts />
			<Posts />
			<Posts />
		</Section>
	);
};

export default Home;
