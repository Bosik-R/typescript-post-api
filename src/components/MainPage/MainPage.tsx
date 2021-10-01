import React from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';

export const Wrapper = styled.section`
	position: relative;
`;

const MainPage: React.FC = () => {
	const { posts } = useGlobalContext();

	return (
		<Wrapper>
			{posts.map((post) => (
				<PostCard post={post} key={post.id} />
			))}
		</Wrapper>
	);
};

export default MainPage;
