import React from "react";
import { Container } from "../../styles/Container/Container";
import { UserPhoto } from "../../styles/UserPhoto/UserPhoto";
import { UserName } from "../../styles/UserName/UserName";
import { TextSpan } from "../../styles/TextSpan/TextSpan";
import "./styles.css";

const Sugestions = () => {
	return (
		<Container
			width="360px"
			height="500px"
			dir="column"
			justify="center"
			gap="20px"
			className="sugestions-container"
		>
			<Container
				className="user-recommended"
				justify="left"
				gap="10px"
				width="100%"
			>
				<UserPhoto height="50px" width="50px" />
				<UserName weight="500">silviocésarsf</UserName>
				<TextSpan>Mudar</TextSpan>
			</Container>
			<Container justify="space-between" gap="10px" width="100%">
				<TextSpan color="#A8A8A8">Sugestões para você</TextSpan>
				<TextSpan color="#ffff">Ver Tudo</TextSpan>
			</Container>
			<Container
				className="user-recommended"
				justify="left"
				gap="10px"
				width="100%"
			>
				<UserPhoto height="50px" width="50px" />
				<UserName weight="500">anyuser</UserName>
				<TextSpan>Seguir</TextSpan>
			</Container>
			<Container
				className="user-recommended"
				justify="left"
				gap="10px"
				width="100%"
			>
				<UserPhoto height="50px" width="50px" />
				<UserName weight="500">anyuser</UserName>
				<TextSpan>Seguir</TextSpan>
			</Container>
			<Container
				className="user-recommended"
				justify="left"
				gap="10px"
				width="100%"
			>
				<UserPhoto height="50px" width="50px" />
				<UserName weight="500">anyuser</UserName>
				<TextSpan>Seguir</TextSpan>
			</Container>
			<Container
				className="user-recommended"
				justify="left"
				gap="10px"
				width="100%"
			>
				<UserPhoto height="50px" width="50px" />
				<UserName weight="500">anyuser</UserName>
				<TextSpan>Seguir</TextSpan>
			</Container>
		</Container>
	);
};

export default Sugestions;
