import React from 'react';
import { ThemeProvider } from 'styled-components';
import { variables } from '../../styles/styleVariables';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from '../Header/Header';
import * as S from './Layout.Elements';

const Layout: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={variables}>
			<GlobalStyles />
			<S.Container>
				<Header />
				<S.Wrapper>{children}</S.Wrapper>
			</S.Container>
		</ThemeProvider>
	);
};

export default Layout;
