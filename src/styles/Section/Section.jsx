import styled from "styled-components";

export const Section = styled.section`
	min-height: 100vh;
	width: 100%;
	padding: 1rem 0;
	padding-right: 5rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	@media (max-width: 520px) {
		padding: 0;
	}

	@media (max-width: 405px) {
	}
`;
