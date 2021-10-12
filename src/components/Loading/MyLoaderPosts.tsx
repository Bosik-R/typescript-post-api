import React from 'react';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import { variables } from '../../styles/styleVariables';

const MyLoaderPosts: React.FC = () => {
	const smallOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<div style={{ marginBottom: 30 }}>
			{smallOrMobile ? (
				<ContentLoader
					speed={2}
					width={298}
					height={237}
					viewBox='0 0 298 237'
					backgroundColor={variables.color.loaderBg}
					foregroundColor={variables.color.loaderForeground}>
					<rect x='16' y='15' rx='5' ry='5' width='266' height='4' />
					<rect x='16' y='222' rx='5' ry='5' width='268' height='4' />
					<rect x='15' y='16' rx='5' ry='5' width='4' height='207' />
					<rect x='281' y='16' rx='5' ry='5' width='4' height='207' />
					<rect x='34' y='30' rx='5' ry='5' width='160' height='6' />
					<rect x='34' y='50' rx='5' ry='5' width='130' height='6' />
					<rect x='35' y='115' rx='5' ry='5' width='230' height='6' />
					<rect x='35' y='133' rx='0' ry='0' width='230' height='6' />
					<rect x='35' y='151' rx='5' ry='5' width='150' height='6' />
					<rect x='160' y='179' rx='10' ry='10' width='110' height='33' />
				</ContentLoader>
			) : (
				<ContentLoader
					speed={2}
					width={604}
					height={240}
					viewBox='0 0 604 240'
					backgroundColor={variables.color.loaderBg}
					foregroundColor={variables.color.loaderForeground}>
					<rect x='2' y='2' rx='10' ry='10' width='600' height='4' />
					<rect x='2' y='232' rx='10' ry='10' width='600' height='4' />
					<rect x='2' y='4' rx='5' ry='5' width='4' height='230' />
					<rect x='598' y='4' rx='5' ry='5' width='4' height='230' />
					<rect x='20' y='28' rx='5' ry='5' width='400' height='18' />
					<rect x='20' y='110' rx='0' ry='0' width='525' height='10' />
					<rect x='20' y='135' rx='0' ry='0' width='515' height='10' />
					<rect x='427' y='180' rx='10' ry='10' width='158' height='47' />
				</ContentLoader>
			)}
		</div>
	);
};

export default MyLoaderPosts;
