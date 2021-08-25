import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

export const Wrapper = styled.header`
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #5c5c5c;
`;

export const TitleWraper = styled.div`
	padding: 10px 10px;
	background-color: #262020;
	text-align: center;
	border-radius: 10px 10px 0 0;
	color: #ffffff;
	position: relative;
	overflow: hidden;
`;

export const DotsWrapper = styled.span`
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
`;

export const Dot = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: #858585;
	margin-right: 8px;

	&:hover {
		background-color: #05a90a;
	}
`;

export const Nav = styled.nav`
	width: 100%;
	padding: 10px;
`;

export const Breadcrumbs = styled(Link)`
	margin: 0 5px;
	padding: 0;
	text-decoration: none;
	color: #000000;
`;

export const Separator = styled(ArrowIosForwardOutline)`
	height: 16px;
	margin: 0 7px;
	padding-bottom: 2px;
`;

export const LinkTitle = styled.span`
	margin: 0 7px;
	color: #787878;
`;
