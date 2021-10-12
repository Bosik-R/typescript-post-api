import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1024px;
	width: 100%;
	min-height: 500px;
	margin: 0 auto;
	border: 1px solid ${({ theme }) => theme.color.borderAppContainer};
	border-radius: 20px;
	margin-bottom: 20px;
	overflow: hidden;

	@media (max-width: 1023px) {
		border-radius: 0;
		margin-bottom: 0;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	padding: 20px 10px;
`;
