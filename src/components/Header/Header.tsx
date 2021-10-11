import React from 'react';
import { useGlobalContext, initialPostData, initialCommentsData } from '../../utils/GlobalContext';
import * as S from './Header.Elements';

const Header: React.FC = () => {
	const { postData, setPostData, editMode, setEditMode, setComments } = useGlobalContext();

	const handleGoBack = () => {
		setPostData(initialPostData);
		setComments(initialCommentsData);
	};

	return (
		<S.Wrapper>
			<S.Title>{`{JSON}`} Placeholder</S.Title>
			<S.EditModeBtnWrapper edit={editMode}>
				<S.EditModeBtn edit={editMode} onClick={() => setEditMode(!editMode)}>
					EDIT MODE
				</S.EditModeBtn>
			</S.EditModeBtnWrapper>
			<S.Breadcrumbs>
				<S.LinkBtn to='/' onClick={() => handleGoBack()}>
					Posts
				</S.LinkBtn>
				{postData.id && <S.Separator />}
				{postData.id && <S.LinkTitle>{postData.title}</S.LinkTitle>}
			</S.Breadcrumbs>
		</S.Wrapper>
	);
};

export default Header;
