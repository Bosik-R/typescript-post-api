import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

export const Wrapper = styled.header`
	position: relative;
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #5c5c5c;
`;

export const Title = styled.h1`
	padding: 20px;
	margin: 0;
	background-color: #262020;
	text-align: center;
	color: #ffffff;
	overflow: hidden;

	@media (max-width: 650px) {
		font-size: 14px;
		text-align: left;
	}
`;

export const EditModeBtn = styled.button<{ edit: boolean }>`
	position: absolute;
	top: 25px;
	right: 100px;
	background: ${({ edit }) => (edit ? '#ffffff' : '#515151')};
	color: ${({ edit }) => (edit ? '#000000' : '#ffffff')};
	border: 1px solid #ffffff;
	border-radius: 10px;
	padding: 8px 10px;
	cursor: pointer;

	@media (max-width: 768px) {
		right: 50px;
	}

	@media (max-width: 650px) {
		top: 13px;
		right: 20px;
		font-size: 12px;
	}
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
