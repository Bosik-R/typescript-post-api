import React from 'react';
import ContentLoader from 'react-content-loader';
import { variables } from '../../styleVariables';

const MyLoaderComments: React.FC = () => (
	<div style={{ float: 'left' }}>
		<ContentLoader
			speed={2}
			width={290}
			height={200}
			viewBox='0 0 290 200'
			backgroundColor={variables.color.loaderBg}
			foregroundColor={variables.color.loaderForeground}>
			<rect x='4' y='3' rx='5' ry='5' width='200' height='12' />
			<rect x='4' y='60' rx='5' ry='5' width='250' height='8' />
			<rect x='4' y='75' rx='5' ry='5' width='250' height='8' />
			<rect x='4' y='90' rx='5' ry='5' width='150' height='8' />
			<rect x='4' y='105' rx='5' ry='5' width='200' height='8' />
		</ContentLoader>
	</div>
);

export default MyLoaderComments;
