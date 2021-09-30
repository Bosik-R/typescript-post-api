import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Container = styled.div`
	max-width: 1024px;
	width: 100%;
	min-height: 500px;
	margin: 0 auto;
	border: 1px solid #5c5c5c;
	border-radius: 20px;
	margin-bottom: 20px;
	overflow: hidden;
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
