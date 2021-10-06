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
		let patchData = {};
		if (type === 'title' || type === 'text') {
			if (type === 'title') patchData = { title: newValue };
			if (type === 'text') patchData = { body: newValue };

			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${modalData.id}`, {
				method: 'PATCH',
				body: JSON.stringify(patchData),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			const data = await response.json();

			const filtered: Array<PostProps> = posts.map((p) => {
				if (p.id === modalData.id) return data;
				return p;
			});

			setPosts(filtered);
		}

		if (type === 'comment') {
			const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${modalData.id}/comments`,
				{
					method: 'POST',
					body: JSON.stringify({
						name: commentName,
						body: newValue,
						userId: random(1, 10),
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
			);

			const data = await response.json();
			setComments([...comments, data]);
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
