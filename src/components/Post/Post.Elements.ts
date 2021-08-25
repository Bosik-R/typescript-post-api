import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 50%;
`;

export const Title = styled.h1`
	margin: 0;
	padding: 50px 20px 20px 20px;
`;

export const Loading = styled(Title)``;

export const PostContent = styled.p`
	padding: 20px;
	margin-bottom: 30px;
`;

export const CommentsWrapper = styled.ul`
	font-size: 20px;
	font-weight: bolder;
	margin: 20px;
	padding: 0;
`;

export const Comment = styled.li`
	padding: 0;
	margin-bottom: 20px;
	list-style: none;
`;

export const CommentName = styled.h5`
	margin: 20px;
`;

export const CommentContent = styled(PostContent)``;
