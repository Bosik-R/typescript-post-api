import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical';

interface Props {
	edit: boolean;
}

export const PostLink = styled.div`
	position: relative;
	width: 600px;
	padding: 15px;
	border-radius: 10px;
	box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	@media (max-width: 650px) {
		width: 274px;
	}
`;

export const MobileIcon = styled(ThreeDotsVertical)`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 20px;
	color: #000000;
`;

export const Title = styled.h1`
	margin: 0;
	padding-bottom: 20px;
	width: 90%;

	@media (max-width: 650px) {
		font-size: 12px;
	}
`;

export const Content = styled.p`
	@media (max-width: 650px) {
		font-size: 12px;
	}
`;

export const ButtonsWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const EditNav = styled.nav`
	display: flex;
	flex-grow: 1;
	justify-content: flex-start;
	align-items: center;
`;

export const NavBtn = styled.button`
	padding: 10px 15px;
	margin: 0px 12px;
	border: 1px solid #033500;
	border-radius: 10px;
	cursor: pointer;
	color: #000000;
	background-color: inherit;
	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: #033500;
		color: #ffffff;
	}
`;

export const PostDetailsButton = styled(Link)`
	padding: 10px 20px;
	border: 1px solid #5c5c5c;
	border-radius: 10px;
	font-size: 20px;
	background-color: inherit;
	cursor: pointer;
	text-decoration: none;
	color: #000000;
	background-position: 100% 0;
	background-image: linear-gradient(90deg, #5c5c5c 50%, transparent 50%);
	background-size: 300%;
	transition: all 0.5s ease-in-out;

	@media (max-width: 650px) {
		font-size: 14px;
		padding: 7px 13px;
	}

	&:hover {
		background-position: 1% 100%;
		color: #ffffff;
	}
`;
