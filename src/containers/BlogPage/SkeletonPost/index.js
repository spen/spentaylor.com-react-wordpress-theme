/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import SkeletonPost from 'components/SkeletonPost';

export default function() {
	return (
		<ContentContainer>
			<h2>Loading...</h2>
			<SkeletonPost />
		</ContentContainer>
	);
}
