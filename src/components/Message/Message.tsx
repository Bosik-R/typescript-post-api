import styled from 'styled-components';

const MessageWrapper = styled.article`
	padding: 70px 0;
`;
const MessageStatus = styled.h3`
	width: 100%;
	text-align: center;
`;
interface Props {
	status: number | null;
}

const Message: React.FC<Props> = ({ status }) => {
	return (
		<MessageWrapper>
			<MessageStatus>Upps something went wrong</MessageStatus>
			<MessageStatus>the error is: {status === 404 ? 'Not Found' : status}</MessageStatus>
		</MessageWrapper>
	);
};

export default Message;
