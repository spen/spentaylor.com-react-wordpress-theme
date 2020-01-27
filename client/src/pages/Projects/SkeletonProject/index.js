/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import Paper from 'components/Paper';
import SkeletonBar from 'components/SkeletonBar';
import SkeletonPulse from 'components/SkeletonPulse';
import FeaturedImage from '../FeaturedImage';

import StyledHeader from '../Project/styles/Header';

export default () => (
	<ContentContainer>
		<StyledHeader>Loading...</StyledHeader>
		<Paper>
			<FeaturedImage />
			<div style={ { padding: '10px 30px 30px 30px' } } >
				<SkeletonPulse>
					<SkeletonBar width="20%" inline />
					<SkeletonBar width="40%" inline />
					<SkeletonBar width="40%" />
					<SkeletonBar width="20%" inline />
					<SkeletonBar width="30%" inline />
					<SkeletonBar width="13%" inline />
					<SkeletonBar width="50%" inline />
					<SkeletonBar width="20%" inline />
					<SkeletonBar width="60%" />
					<SkeletonBar width="40%" />
					<SkeletonBar width="13%" inline />
					<SkeletonBar width="50%" inline />
					<SkeletonBar width="20%" inline />
				</SkeletonPulse>
			</div>
		</Paper>
	</ContentContainer>
);
