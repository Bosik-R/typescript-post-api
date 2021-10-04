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

export const InheritData = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	width: 100%;
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

export const Paragraph = styled.p`
	margin: 0;
	padding: 10px;

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const BtnWrapper = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	width: 100%;
`;

export const GoBackBtn = styled(Link)`
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

export const AddCommentBtn = styled.button`
	align-self: flex-start;
	padding: 6px 10px;
	margin-right: 30px;
	border: 1px solid #033500;
	border-radius: 10px;
	cursor: pointer;
	font-size: 16px;
	background-color: inherit;
	font-family: inherit;
	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: #033500;
		color: #ffffff;
	}
`;

export const CommentsWrapper = styled.ul`
	margin: 0;
	padding: 0;
`;

export const NoCommentsMessage = styled.h1`
	width: 100%;
	text-align: center;
	padding: 30px;
`;

export const Comment = styled.li`
	padding: 0 0 10px 0;
	margin-bottom: 20px;
	border-bottom: 1px solid #bbbbbb;
	list-style: none;

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const CommentName = styled.h5`
	margin: 8px;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;
