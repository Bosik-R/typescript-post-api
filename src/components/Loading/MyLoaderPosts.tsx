import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';

const MyLoaderPosts: React.FC = () => {
	const SmallOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<div style={{ marginBottom: 30 }}>
			<ContentLoader
				speed={2}
				width={SmallOrMobile ? 280 : 604}
				height={SmallOrMobile ? 140 : 240}
				viewBox='0 0 604 240'
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'>
				<rect x='2' y='2' rx='10' ry='10' width={SmallOrMobile ? '250' : '600'} height='4' />
				<rect x='2' y='232' rx='10' ry='10' width={SmallOrMobile ? '250' : '600'} height='4' />
				<rect x='2' y='4' rx='5' ry='5' width='4' height={SmallOrMobile ? '120' : '230'} />
				<rect x='598' y='4' rx='5' ry='5' width='4' height={SmallOrMobile ? '120' : '230'} />
				{SmallOrMobile ? null : (
					<>
						<rect x='20' y='28' rx='5' ry='5' width='400' height='18' />
						<rect x='20' y='110' rx='0' ry='0' width='525' height='10' />
						<rect x='20' y='135' rx='0' ry='0' width='515' height='10' />
						<rect x='427' y='180' rx='10' ry='10' width='158' height='47' />
					</>
				)}
			</ContentLoader>
		</div>
	);
};

export default MyLoaderPosts;
