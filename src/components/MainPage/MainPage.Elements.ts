import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
	width: 100%;
	padding: 20px 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

export const PostLink = styled.div`
	max-width: 600px;
	width: 100%;
	padding: 15px;
	border: 1px solid #5c5c5c;
	margin-bottom: 30px;
`;

export const Title = styled.h1`
	margin: 10px;
	padding-bottom: 20px;
`;
export const Content = styled.p``;

export const Button = styled(Link)`
	padding: 10px 20px;
	float: right;
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

	&:hover {
		background-position: 1% 100%;
		color: #ffffff;
	}
`;
