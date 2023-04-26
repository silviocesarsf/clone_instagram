import styled from "styled-components";

export const UserName = styled.p`
    font-weight: bold;
    font-size: ${props => props.fontSize ? props.fontSize : ".9em"};
`