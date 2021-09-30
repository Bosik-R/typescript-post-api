import React from 'react';
import { useGlobalContext, InitialPostData } from '../../utils/GlobalContext';
import * as S from './Header.Elements';

const Header: React.FC = () => {
	const { postData, setPostData } = useGlobalContext();

	return (
		<S.Wrapper>
			<S.Title>{`{JSON}`} Placeholder</S.Title>

			<S.Breadcrumbs>
				<S.LinkBtn to='/' onClick={() => setPostData(InitialPostData)}>
					Posts
				</S.LinkBtn>
				{postData.id && (
					<>
						<S.Separator>{'>'}</S.Separator>
						<S.LinkTitle>{postData.title}</S.LinkTitle>
					</>
				)}
			</S.Breadcrumbs>
		</S.Wrapper>
	);
};

export default Header;
