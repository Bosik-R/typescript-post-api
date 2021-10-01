import styled from 'styled-components';

interface PropsEditArea {
	textTitle: string;
}

export const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #ffffff;
	border-radius: 10px;
	overflow: hidden;
	padding: 15px;
`;

export const EditArea = styled.textarea<PropsEditArea>`
	font-size: ${({ textTitle }) => (textTitle === 'title' ? '24px' : '16px')};
	width: 100%;
	height: 70%;
	border: none;
	outline: none;
	resize: none;
	font-family: inherit;
	font-weight: bold;
	overflow: auto;

	@media (max-width: 650px) {
		font-size: 12px;
	}
`;

export const ModalBtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const BtnConfirm = styled.button`
	padding: 8px 12px;
	margin: 0 10px;
	color: #ffffff;
	background-color: #06ac02;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`;

export const BtnCancle = styled(BtnConfirm)`
	background-color: #ae0000;
`;
