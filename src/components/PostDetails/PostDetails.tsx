import React, { useEffect, useState, Fragment } from 'react';
import { initialCommentsData, initialPostData, useGlobalContext } from '../../utils/GlobalContext';
import { method, urlComments } from '../../utils/fetchData';
import { Status, initialStatus, initialModalData } from '../../utils/initialData';
import * as S from './PostDetails.Elements';
import MyLoader from '../Loading/MyLoaderComments';
import Message from '../Message/Message';
import Modal from '../Modal/Modal';

const PostDetails: React.FC = () => {
	const { comments, setComments, editMode, postData, setPostData } = useGlobalContext();
	const [status, setStatus] = useState<Status>(initialStatus);
	const [modalData, setModalData] = useState(initialModalData);

	const getPostDetails = async () => {
		try {
			const response = await fetch(urlComments(postData.id), method);
			if (!response.ok) {
				setStatus({ loading: false, success: false, error: true, resStatus: response.status });
			} else {
				const data = await response.json();
				setStatus({ loading: false, success: true, error: false, resStatus: response.status });
				setComments(data);
			}
		} catch (err) {
			setStatus({ loading: false, success: false, error: true, resStatus: 500 });
		}
	};

	useEffect(() => {
		setTimeout(() => {
			getPostDetails();
		}, 1000);
		return () => {
			setPostData(initialPostData);
			setComments(initialCommentsData);
		};
	}, []);

	const handleGoBack = () => {};

	return (
		<S.Wrapper>
			<S.InheritData>
				{modalData.open && <Modal modalData={modalData} setModalData={setModalData} />}
				<S.Title>{postData.title}</S.Title>
				<S.Paragraph>{postData.body}</S.Paragraph>
				<S.BtnWrapper>
					{editMode && <S.AddCommentBtn onClick={() => setModalData({ ...modalData, open: true, type: 'comment' })}>Add comment</S.AddCommentBtn>}
					<S.GoBackBtn to='/' onClick={() => handleGoBack()}>
						Go back
					</S.GoBackBtn>
				</S.BtnWrapper>
				<S.Title>Comments</S.Title>
			</S.InheritData>
			<S.CommentsWrapper>
				{status.loading && (
					<Fragment>
						<MyLoader />
						<MyLoader />
					</Fragment>
				)}
				{status.error && <Message status={status.resStatus} />}
				{status.success && comments.length === 0 && <S.NoCommentsMessage> there are no comments</S.NoCommentsMessage>}
				{status.success &&
					comments.map((comment) => (
						<S.Comment key={comment.id}>
							<S.CommentName>{comment.name}</S.CommentName>
							<S.Paragraph>{comment.body}</S.Paragraph>
						</S.Comment>
					))}
			</S.CommentsWrapper>
		</S.Wrapper>
	);
};

export default PostDetails;
