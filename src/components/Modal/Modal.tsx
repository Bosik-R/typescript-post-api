import React, { useState } from 'react';
import * as S from './Modal.Elements';
import { useGlobalContext, PostProps } from '../../utils/GlobalContext';
import { ModalProps, initialModalData } from '../PostCard/PostCard';

interface Props {
	modalData: ModalProps;
	setModalData: (data: ModalProps) => void;
}
const Modal: React.FC<Props> = ({ modalData, setModalData }) => {
	const { posts, setPosts } = useGlobalContext();
	const [newValue, setNewValue] = useState(modalData.data);

	const handleConfirm = async () => {
		let filtered: Array<PostProps> = [];

		if (modalData.type === 'title') {
			filtered = posts.map((p) => {
				if (p.id === modalData.id) return { ...p, title: newValue };
				else return p;
			});
		}

		if (modalData.type === 'text') {
			filtered = posts.map((p) => {
				if (p.id === modalData.id) return { ...p, body: newValue };
				else return p;
			});
		}

		setPosts(filtered);
		setModalData(initialModalData);
	};

	return (
		<S.ModalWrapper>
			<S.EditArea
				textTitle={modalData.type}
				rows={10}
				cols={10}
				wrap='soft'
				value={newValue}
				maxLength={80}
				onChange={(e) => setNewValue(e.target.value)}
			/>
			<S.ModalBtnWrapper>
				<S.BtnConfirm onClick={() => handleConfirm()}>CONFIRM</S.BtnConfirm>
				<S.BtnCancle onClick={() => setModalData(initialModalData)}>CANCLE</S.BtnCancle>
			</S.ModalBtnWrapper>
		</S.ModalWrapper>
	);
};

export default Modal;
