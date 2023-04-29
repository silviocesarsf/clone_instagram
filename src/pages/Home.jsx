import React, { useContext, useEffect, useState } from "react";
import { Section } from "../styles/Section/Section";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import Sugestions from "../components/Sugestions/Sugestions";
import { ContextProvider } from "../context/Context";
import { RotatingLines } from "react-loader-spinner";

const Home = () => {
	const { isLoading, setIsLoading } = useContext(ContextProvider);

	const loadingPage = () => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};

	useEffect(() => {
		loadingPage();
		console.log(isLoading);
	}, []);

	const usersPost = [
		"joaoqyy",
		"silviocesarsf",
		"aspas",
		"natiroots",
		"undefined",
		"joaoqyy",
		"silviocesarsf",
		"aspas",
		"natiroots",
		"undefined",
		"joaoqyy",
		"silviocesarsf",
		"aspas",
		"natiroots",
		"undefined",
	];

	return (
		<Section>
			<Sugestions />
			<Stories isLoading={isLoading} />
			{isLoading ? (
				<RotatingLines
					strokeColor="grey"
					strokeWidth="5"
					animationDuration="0.75"
					width="96"
					visible={true}
				/>
			) : (
				usersPost.map((post, index) => (
					<Posts key={index} nameUser={post} />
				))
			)}
		</Section>
	);
};

export default Home;
