import styled from 'styled-components';

const MessageWrapper = styled.article`
	padding: 70px 0;
	height: 100%;
`;
const MessageStatus = styled.h3`
	width: 100%;
	text-align: center;
`;
interface Props {
	status: number;
}

const messageText = (resStatus: number) => {
	switch (resStatus) {
		case 404:
			return `Page Not Found`;
		case 500:
			return `Server didn't respond`;
		default:
			return 'something went wrong';
	}
};

const Message: React.FC<Props> = ({ status }) => {
	return (
		<MessageWrapper>
			<MessageStatus>{messageText(status)}</MessageStatus>
		</MessageWrapper>
	);
};

export default Message;
