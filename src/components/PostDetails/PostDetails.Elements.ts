import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variables } from '../../styleVariables';

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
	padding: 15px;
	border-bottom: 2px solid ${variables.color.border};
	border-top: 2px solid ${variables.color.border};

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 16px;
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
	align-self: flex-end;
	margin: 15px;
	padding: 6px 10px;
	border: 1px solid ${variables.color.border};
	border-radius: 10px;
	cursor: pointer;
	color: ${variables.color.fontDark};
	transition: all 0.4s ease-in-out;

	@media (max-width: 425px) {
		font-size: 12px;
	}

	&:hover,
	:focus {
		background-color: ${variables.color.bgPrimary};
		color: ${variables.color.fontLight};
	}
`;

interface Props {
	editMode: boolean;
}

export const TitleComments = styled(Title)`
	position: relative;
	overflow: hidden;
`;

export const AddCommentBtn = styled.button<Props>`
	position: absolute;
	right: 15px;
	top: 10px;
	float: right;
	padding: 6px 10px;
	border: 1px solid ${variables.color.border};
	border-radius: 10px;
	cursor: pointer;
	font-size: 16px;
	background-color: ${variables.color.bgLight};
	font-family: inherit;
	transform: ${({ editMode }) => (editMode ? 'translateY(0)' : `translateY(-150%)`)};
	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: ${variables.color.bgPrimary};
		color: ${variables.color.fontLight};
	}

	@media (max-width: 425px) {
		font-size: 12px;
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
	border-bottom: 1px solid ${variables.color.borderSeparator};
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
