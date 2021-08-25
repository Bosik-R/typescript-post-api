import React from 'react';
import { useGlobalContext, InitialPostData } from '../../utils/GlobalContext';
import * as S from './Header.Elements';

const Header: React.FC = () => {
	const { postData, setPostData } = useGlobalContext();

	return (
		<S.Wrapper>
			<S.TitleWraper>
				<S.DotsWrapper>
					<S.Dot></S.Dot>
					<S.Dot></S.Dot>
					<S.Dot></S.Dot>
				</S.DotsWrapper>
				Dashboard
			</S.TitleWraper>
			<S.Nav>
				<S.Breadcrumbs to='/' onClick={() => setPostData(InitialPostData)}>
					Posts
				</S.Breadcrumbs>
				{postData.id && (
					<>
						<S.Separator>{'>'}</S.Separator>
						<S.LinkTitle>{postData.title}</S.LinkTitle>
					</>
				)}
			</S.Nav>
		</S.Wrapper>
	);
};

export default Header;
