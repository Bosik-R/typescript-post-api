import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

export const Wrapper = styled.header`
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #5c5c5c;
`;

export const Title = styled.div`
	padding: 15px;
	background-color: #262020;
	text-align: center;
	border-radius: 10px 10px 0 0;
	color: #ffffff;
	overflow: hidden;
`;

export const Breadcrumbs = styled.nav`
	width: 100%;
	padding: 10px;
`;

export const LinkBtn = styled(Link)`
	margin: 0 5px;
	padding: 0;
	text-decoration: none;
	color: #000000;
	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 14px;
	}
`;

export const Separator = styled(ArrowIosForwardOutline)`
	height: 16px;
	margin: 0 7px;
	padding-bottom: 2px;
`;

export const LinkTitle = styled.span`
	margin: 0 7px;
	color: #787878;

	@media (max-width: 768px) {
		font-size: 14px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;
