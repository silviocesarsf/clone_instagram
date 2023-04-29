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
	box-shadow: 1px 1px 1px #000;

	&::before {
		display: ${(props) => (props.storie ? "block" : "none")};
		content: "";
		position: absolute;
		z-index: -1;
		border-radius: 100%;
		height: calc(${(props) => props.height} + 7px);
		width: calc(${(props) => props.width} + 7px);
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
