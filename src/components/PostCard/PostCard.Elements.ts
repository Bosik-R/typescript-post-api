import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostLink = styled.div`
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

export const Title = styled.h1`
	margin: 10px;
	padding-bottom: 20px;

	@media (max-width: 650px) {
		font-size: 12px;
	}
`;

export const Content = styled.p`
	@media (max-width: 650px) {
		font-size: 12px;
	}
`;

export const Button = styled(Link)`
	align-self: flex-end;
	padding: 10px 20px;
	border: 1px solid #5c5c5c;
	border-radius: 10px;
	font-size: 20px;
	background-color: inherit;
	transition: all 300ms ease;
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
