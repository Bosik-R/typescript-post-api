import React, { useEffect, useState, Fragment } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import MyLoader from '../Loading/MyLoaderComments';
import * as S from './PostDetails.Elements';
import { method, urlComments } from '../../utils/fetchData';
import { Status, initialStatus } from '../../utils/initialStatus';
import Message from '../Message/Message';

interface CommentProps {
	id: string;
	name: string;
	body: string;
}

const PostDetails: React.FC = () => {
	const { postData } = useGlobalContext();
	const [status, setStatus] = useState<Status>(initialStatus);
	const [comments, setComments] = useState<Array<CommentProps>>([]);

	const getPost = async () => {
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
			getPost();
		}, 2000);
	}, []);

	return (
		<S.Wrapper>
			<S.Title>{postData.title}</S.Title>
			<S.PostContent>{postData.body}</S.PostContent>
			<S.CommentsWrapper>Comments</S.CommentsWrapper>
			{status.loading && (
				<Fragment>
					<MyLoader />
					<MyLoader />
				</Fragment>
			)}
			{status.error && <Message status={status.resStatus} />}
			{status.success && comments.length === 0 && <h1> there are no comments</h1>}
			{status.success &&
				comments.map((comment) => (
					<S.Comment key={comment.id}>
						<S.CommentName>{comment.name}</S.CommentName>
						<S.CommentContent>{comment.body}</S.CommentContent>
					</S.Comment>
				))}
		</S.Wrapper>
	);
};

export default PostDetails;
