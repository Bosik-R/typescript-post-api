import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoaderPosts: React.FC = () => (
	<ContentLoader speed={2} width={400} height={160} viewBox='0 0 400 160' backgroundColor='#d3cfcf' foregroundColor='#ecebeb'>
		<rect x='0' y='0' rx='0' ry='0' width='280' height='3' />
		<rect x='0' y='3' rx='0' ry='0' width='3' height='150' />
		<rect x='277' y='3' rx='3' ry='3' width='3' height='150' />
		<rect x='10' y='15' rx='3' ry='3' width='150' height='10' />
		<rect x='0' y='150' rx='3' ry='3' width='280' height='3' />
		<rect x='15' y='70' rx='5' ry='5' width='250' height='5' />
		<rect x='15' y='90' rx='5' ry='5' width='250' height='5' />
		<rect x='160' y='110' rx='0' ry='0' width='100' height='2' />
		<rect x='160' y='140' rx='0' ry='0' width='100' height='2' />
		<rect x='258' y='112' rx='0' ry='0' width='2' height='28' />
		<rect x='160' y='112' rx='0' ry='0' width='2' height='28' />
		<rect x='176' y='122' rx='0' ry='0' width='67' height='8' />
	</ContentLoader>
);

export default MyLoaderPosts;
