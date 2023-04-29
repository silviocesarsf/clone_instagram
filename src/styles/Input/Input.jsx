import styled from "styled-components";

export const Input = styled.input`
	background-color: transparent;
	width: ${(props) => (props.width ? props.width : "100%")};
	color: white;
	border-bottom: 1px solid #363636;
	padding: 1rem 0;
`;
