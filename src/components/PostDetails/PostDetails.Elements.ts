import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
	width: 50%;
	padding: 20px 10px;

	@media (max-width: 768px) {
		width: 100%;
		padding: 10px;
	}
`;

export const Title = styled.h1`
	margin: 0 auto;
	padding: 10px;
	border-bottom: 2px solid #094000;
	border-top: 2px solid #094000;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const PostContent = styled.p`
	position: relative;
	padding: 10px;
	margin-bottom: 30px;

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const GoBackBtn = styled(Link)`
	position: absolute;
	right: 10px;
	bottom: -40px;
	padding: 6px 10px;
	border: 1px solid #033500;
	border-radius: 10px;
	cursor: pointer;
	color: #000000;
	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: #033500;
		color: #ffffff;
	}
`;

export const CommentsWrapper = styled.ul`
	font-size: 18px;
	font-weight: bold;
	margin: 20px 0;
	padding: 0 20px;
	border-bottom: 2px solid #094000;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 14px;
	}
`;

export const Comment = styled.li`
	padding: 0;
	margin-bottom: 20px;
	list-style: none;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const CommentName = styled.h5`
	margin: 20px;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const CommentContent = styled(PostContent)``;
