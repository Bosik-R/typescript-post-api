import React, { useState } from 'react';
import { useGlobalContext, PostProps } from '../../utils/GlobalContext';
import Modal from '../Modal/Modal';
import * as S from './PostCard.Elements';
import { useMediaQuery } from 'react-responsive';

type Props = {
	post: PostProps;
};

export type ModalProps = {
	open: boolean;
	id: string;
	type: string;
	data: string;
};

export const initialModalData = {
	open: false,
	id: '',
	type: '',
	data: '',
};

const PostCard: React.FC<Props> = ({ post }) => {
	const { posts, editMode, setPosts, setPostData } = useGlobalContext();
	const smallOrMobile = useMediaQuery({ query: '(max-width: 650px)' });
	const [modalData, setModalData] = useState<ModalProps>(initialModalData);

	const [openModal, setOpenModal] = useState(false);
	const [editValue, setEditValue] = useState('');
	const [reqType, setReqType] = useState('');

	const handlePost = (postDetais: PostProps) => {
		setPostData({ id: postDetais.id, title: postDetais.title, body: postDetais.body });
	};

	const handleOpenModal = (type: string, value: string) => {
		setModalData({ open: true, id: post.id, type: type, data: value });
		setOpenModal(true);
		setEditValue(value);
		setReqType(type);
	};

	/* JSON Placeholder does not support real patch or delete method that's why I simulate this on the response Array but every handler has a commented fetch request */

	const handleDelete = async () => {
		const filtered = posts.filter((p) => p.id !== post.id);
		setPosts(filtered);
	};

	return (
		<S.PostLink key={post.id}>
			{editMode && smallOrMobile && <S.MobileIcon />}

			{modalData.open && <Modal modalData={modalData} setModalData={setModalData} />}
			<S.Title>{post.title}</S.Title>
			<S.Content>{post.body}</S.Content>
			<S.ButtonsWrapper>
				{editMode && !smallOrMobile && (
					<S.EditNav>
						<S.NavBtn onClick={() => handleOpenModal('title', post.title)}>EDIT TITLE</S.NavBtn>
						<S.NavBtn onClick={() => handleOpenModal('text', post.body)}>EDIT TEXT</S.NavBtn>
						<S.NavBtn onClick={() => handleDelete()}>DELETE POST</S.NavBtn>
					</S.EditNav>
				)}
				<S.PostDetailsButton to={`/posts/${post.id}`} onClick={() => handlePost(post)}>
					Full Version
				</S.PostDetailsButton>
			</S.ButtonsWrapper>
		</S.PostLink>
	);
};

export default PostCard;
