import React from 'react';

interface Props {
	resStatus: number;
}
const ResponseMessage: React.FC<Props> = ({ resStatus }) => {
	return <div>Not found</div>;
};

export default ResponseMessage;
