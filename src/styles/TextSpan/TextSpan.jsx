import styled from "styled-components";
import { lighten } from "polished";

export const TextSpan = styled.span`
	font-size: ${(props) =>
		props.fontSize ? props.fontSize : ".8em"};
	color: ${(props) => (props.color ? props.color : "#008CE7")};
	font-weight: ${(props) => props.weight};
	transition: 0.5s;

	&:hover {
		color: ${(props) =>
			props.color
				? lighten(0.3, props.color)
				: `${lighten(0.3, "#008CE7")}`};
		cursor: pointer;
	}
`;
