import styled from "styled-components";

export const UserName = styled.p`
    font-weight: ${props => props.weight ? props.weight : "bold"};
    font-size: ${props => props.fontSize ? props.fontSize : ".9em"};
`