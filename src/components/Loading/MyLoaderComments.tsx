import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoaderComments: React.FC = () => (
	<ContentLoader speed={2} width={300} height={200} viewBox='0 0 300 200' backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
		<rect x='34' y='3' rx='5' ry='5' width='200' height='12' />
		<rect x='34' y='60' rx='5' ry='5' width='250' height='8' />
		<rect x='34' y='75' rx='5' ry='5' width='250' height='8' />
		<rect x='34' y='90' rx='5' ry='5' width='150' height='8' />
		<rect x='34' y='105' rx='5' ry='5' width='280' height='8' />
	</ContentLoader>
);

export default MyLoaderComments;
