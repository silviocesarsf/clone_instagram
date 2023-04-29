import React, { useEffect, useState } from "react";
import { Container } from "../../styles/Container/Container";
import { UserPhoto } from "../../styles/UserPhoto/UserPhoto";
import { UserName } from "../../styles/UserName/UserName";
import { TextSpan } from "../../styles/TextSpan/TextSpan";
import "./styles.css";

const Sugestions = () => {
	const [users, setUsers] = useState([
		{
			name: "joaozin_",
			following: false,
			id: 1,
		},
		{
			name: "renatassz",
			following: false,
			id: 2,
		},
		{
			name: "mariasql",
			following: false,
			id: 3,
		},
	]);

	const handleFollowUser = (id) => {
		const updatedUsers = users.map((user) =>
			user.id === id
				? { ...user, following: !user.following }
				: user
		);
		setUsers(updatedUsers);
	};

	useEffect(() => {
		console.log(users);
	}, [users]);

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
			{users.map((user) => (
				<Container
					className="user-recommended"
					justify="left"
					gap="10px"
					width="100%"
					key={user.id}
				>
					<UserPhoto height="50px" width="50px" />
					<UserName weight="500">{user.name}</UserName>
					<TextSpan onClick={() => handleFollowUser(user.id)}>
						{user.following ? "Deixar de seguir" : "Seguir"}
					</TextSpan>
				</Container>
			))}
		</Container>
	);
};

export default Sugestions;
