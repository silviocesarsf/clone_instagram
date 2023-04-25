import styled from "styled-components";
import userPlaceholder from "../../assets/user_placeholder.png";

export const UserPhoto = styled.div`
	background-image: url(${userPlaceholder});
	background-position: center;
	background-size: cover;
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	border-radius: 100%;
`;
