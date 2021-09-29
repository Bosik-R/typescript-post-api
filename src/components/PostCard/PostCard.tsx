import React from 'react';
import { useGlobalContext, PostProps } from '../../utils/GlobalContext';
import * as S from './PostCard.Elements';

type Props = {
	postData: PostProps;
};
const PostCard: React.FC<Props> = ({ postData }) => {
	const { setPostData } = useGlobalContext();

	const handlePost = (post: PostProps) => {
		setPostData({ id: post.id, title: post.title, body: post.body });
	};

	return (
		<S.PostLink key={postData.id}>
			<S.Title>{postData.title}</S.Title>
			<S.Content>{postData.body}</S.Content>
			<S.Button to={`/posts/${postData.id}`} onClick={() => handlePost(postData)}>
				Full Version
			</S.Button>
		</S.PostLink>
	);
};

export default PostCard;
