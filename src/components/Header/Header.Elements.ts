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
	position: absolute;
	top: 25px;
	right: 100px;
	background: ${({ edit }) => (edit ? variables.color.bgLight : variables.color.editBtnHover)};
	color: ${({ edit }) => (edit ? variables.color.fontDark : variables.color.fontLight)};
	border: 1px solid ${variables.color.borderSeparator};
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
