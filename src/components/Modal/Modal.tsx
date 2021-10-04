import React, { useState } from 'react';
import { useGlobalContext, PostProps } from '../../utils/GlobalContext';
import * as S from './Modal.Elements';
import { ModalProps, initialModalData } from '../../utils/initialData';

interface Props {
	modalData: ModalProps;
	setModalData: (data: ModalProps) => void;
}

const Modal: React.FC<Props> = ({ modalData, setModalData }) => {
	const { posts, setPosts, comments, setComments } = useGlobalContext();
	const [newValue, setNewValue] = useState(modalData.data);
	const [commentName, setcommentName] = useState('');

	const handleConfirm = async () => {
		const type = modalData.type;
		if (type === 'comment') {
			const lastId = comments[comments.length - 1].id;
			setComments([...comments, { id: lastId + 1, name: commentName, body: newValue }]);
		} else {
			const filtered: Array<PostProps> = posts.map((p) => {
				if (p.id === modalData.id && type === 'title') return { ...p, title: newValue };
				if (p.id === modalData.id && type === 'text') return { ...p, body: newValue };
				return p;
			});
			setPosts(filtered);
		}
		setModalData(initialModalData);
	};

	return (
		<S.ModalWrapper>
			{modalData.type === 'comment' && (
				<S.EditArea
					textTitle={'commentName'}
					rows={4}
					cols={10}
					wrap='soft'
					placeholder='comment title'
					value={commentName}
					onChange={(e) => setcommentName(e.target.value)}
				/>
			)}
			<S.EditArea
				textTitle={modalData.type}
				rows={modalData.type === 'title' ? 10 : 20}
				cols={10}
				wrap='soft'
				value={newValue}
				maxLength={modalData.type === 'title' ? 80 : 200}
				onChange={(e) => setNewValue(e.target.value)}
				placeholder={modalData.type === 'comment' ? modalData.type : ''}
			/>
			<S.ModalBtnWrapper>
				<S.BtnConfirm onClick={() => handleConfirm()}>CONFIRM</S.BtnConfirm>
				<S.BtnCancle onClick={() => setModalData(initialModalData)}>CANCLE</S.BtnCancle>
			</S.ModalBtnWrapper>
		</S.ModalWrapper>
	);
};

export default Modal;
