import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { variables } from '../../styleVariables';

const Container = styled.div`
	max-width: 1024px;
	width: 100%;
	min-height: 500px;
	margin: 0 auto;
	border: 1px solid ${variables.color.borderAppContainer};
	border-radius: 20px;
	margin-bottom: 20px;
	overflow: hidden;

	@media (max-width: 1023px) {
		border-radius: 0;
		margin-bottom: 0;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	padding: 20px 10px;
`;

const Layout: React.FC = ({ children }) => {
	return (
		<Container>
			<Header />
			<Wrapper>{children}</Wrapper>
		</Container>
	);
};

export default Layout;
