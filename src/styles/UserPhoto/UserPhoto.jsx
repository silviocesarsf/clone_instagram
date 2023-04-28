import styled from "styled-components";
import userPlaceholder from "../../assets/user_placeholder.png";

export const UserPhoto = styled.div`
	background-image: url(${userPlaceholder});
	background-position: center;
	background-size: cover;
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	border-radius: 100%;
	cursor: pointer;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		display: ${(props) => (props.storie ? "block" : "none")};
		content: "";
		position: absolute;
		z-index: -1;
		border-radius: 100%;
		height: calc(${(props) => props.height} + 5px);
		width: calc(${(props) => props.width} + 5px);
		background-image: linear-gradient(
			45deg,
			#feda77,
			#fa7e1e,
			#d62976,
			#aa4ccf,
			#5f6cff
		);
	}
`;
