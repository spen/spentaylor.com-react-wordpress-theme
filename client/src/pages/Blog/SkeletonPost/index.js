/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import SkeletonPost from 'components/SkeletonPost';
import StyledHeading from '../Post/styles/Heading';

export default () => (
	<ContentContainer>
		<StyledHeading>Loading...</StyledHeading>
		<SkeletonPost />
	</ContentContainer>
);
