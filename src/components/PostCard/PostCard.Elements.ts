import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical';
import { variables } from '../../styleVariables';

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
		width: 298px;
	}
`;

export const MobileMenuBtn = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

interface MobileMenuIconProps {
	openMobileMenu: boolean;
}

export const MobileMenuIcon = styled(ThreeDotsVertical)<MobileMenuIconProps>`
	width: 20px;
	color: ${variables.color.fontDark};
	background-color: transparent;
	${({ openMobileMenu }) => openMobileMenu && 'transform: rotate(90deg)'};
	transition: transform 0.2s ease;
`;

export const MobileMenu = styled.div`
	position: absolute;
	top: 10px;
	right: 40px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	background-color: ${variables.color.bgLight};
	overflow: hidden;
	box-shadow: ${variables.boxShadowMobileMenu};
`;

export const Option = styled.button`
	width: 140px;
	text-align: center;
	padding: 7px;
	border-bottom: 2px solid ${variables.color.fontLight};
	font-weight: bold;
	color: ${variables.color.fontLight};
	background-color: ${variables.color.bgPrimary};

	&:last-child {
		border-bottom: none;
	}
`;

export const OptionClose = styled(Option)`
	background-color: ${variables.color.bgCloseDelete};
	color: ${variables.color.fontLight};
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
	position: relative;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	overflow: hidden;
	padding: 5px 0;
`;

interface EditNavProps {
	editMode: boolean;
}

export const EditNav = styled.nav<EditNavProps>`
	position: relative;
	display: flex;
	flex-grow: 1;
	justify-content: flex-start;
	align-items: center;
	transform: ${({ editMode }) => (editMode ? 'translateX(0)' : 'translateX(-100%)')};
	transition: transform 1s cubic-bezier(0.44, 1.39, 0.4, 1.02);
`;

export const NavBtn = styled.button`
	padding: 10px 15px;
	margin: 0px 12px;
	font-weight: 600;
	letter-spacing: 1px;
	box-shadow: ${variables.boxShadowNavBtn};
	border-radius: 10px;
	cursor: pointer;
	color: ${variables.color.fontDark};
	background-color: ${variables.color.bgLight};
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: ${variables.color.bgPrimary};
		color: ${variables.color.fontLight};
	}
`;

export const NavBtnDelete = styled(NavBtn)`
	&:hover {
		background-color: ${variables.color.bgCloseDelete};
	}
`;

export const PostDetailsButton = styled(Link)`
	position: relative;
	box-shadow: ${variables.boxShadowNavBtn};
	margin-right: 10px;
	border-radius: 10px;
	color: ${variables.color.fontLight};
	background-color: ${variables.color.bgPrimary};
	font-size: 14px;
	font-weight: 600;
	padding: 7px 13px;

	@media (min-width: 651px) {
		color: ${variables.color.fontDark};
		background-color: transparent;
		overflow: hidden;
		font-size: 20px;
		padding: 10px 20px;
		transition: all 0.3s ease-in-out;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 105%;
			height: 100%;
			background-color: ${variables.color.bgPrimary};
			transform: translateX(-100%);
			transition: transform 0.3s ease;
			z-index: -1;
		}

		&:hover {
			color: ${variables.color.fontLight};

			&::before {
				transform: translateX(0);
			}
		}
	}
`;
