import React from 'react';
import { useGlobalContext, PostProps } from '../../utils/GlobalContext';
import * as S from './MainPage.Elements';

const MainPage: React.FC = () => {
	const { posts, setPostData } = useGlobalContext();

	const handlePost = (post: PostProps) => {
		setPostData({ id: post.id, title: post.title, body: post.body });
	};

	return (
		<S.Wrapper>
			{posts.map((post) => (
				<S.PostLink key={post.id}>
					<S.Title>{post.title}</S.Title>
					<S.Content>{post.body}</S.Content>
					<S.Button to={`/posts/${post.id}`} onClick={() => handlePost(post)}>
						Full Version
					</S.Button>
				</S.PostLink>
			))}
		</S.Wrapper>
	);
};

export default MainPage;
