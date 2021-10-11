import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { variables } from '../../styleVariables';

export const Wrapper = styled.header`
	position: relative;
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid ${variables.color.borderAppContainer};
`;

export const Title = styled.h1`
	padding: 20px;
	margin: 0;
	background-color: ${variables.color.headerTitleBg};
	text-align: center;
	color: ${variables.color.fontLight};
	overflow: hidden;

	@media (max-width: 650px) {
		font-size: 14px;
		text-align: left;
	}
`;

export const EditModeBtn = styled.button<{ edit: boolean }>`
	position: relative;
	background-color: ${variables.color.bgEditBtn};
	color: ${({ edit }) =>
		edit ? variables.color.fontEditModeBtnOn : variables.color.fontEditModeBtnOff};
	border-radius: inherit;
	padding: 8px 10px;
	cursor: pointer;
	font-weight: bold;
	z-index: 10;

	&:active {
		transform: scale(0.95);
	}
`;

export const EditModeBtnWrapper = styled.div<{ edit: boolean }>`
	position: absolute;
	top: 25px;
	right: 100px;
	border-radius: 10px;

	&::after,
	::before {
		content: '';
		position: absolute;
		border-radius: inherit;
		top: 2px;
		left: 2px;
		right: 2px;
		bottom: 2px;
		transition: all 0.4s ease;
	}

	&::after {
		background-color: ${variables.color.fontEditModeBtnOff};
		box-shadow: ${variables.boxShadowEditModeBtnOff};
		z-index: 1;
	}

	&::before {
		background-color: ${variables.color.bgLight};
		box-shadow: ${variables.boxShadowEditModeBtnOn};
		z-index: 2;
		opacity: ${({ edit }) => (edit ? '1' : '0')};
	}

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
	display: flex;
	align-items: center;
	font-size: 18px;

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 425px) {
		font-size: 14px;
	}
`;

export const LinkBtn = styled(Link)`
	margin: 0 5px;
	padding: 0;
	text-decoration: none;
`;

export const Separator = styled(ArrowIosForwardOutline)`
	height: 18px;

	@media (max-width: 425px) {
		height: 28px;
	}
`;

export const LinkTitle = styled.span`
	margin: 0 7px;
	color: ${variables.color.fontDimmed};
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
