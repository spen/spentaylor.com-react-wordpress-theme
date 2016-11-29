/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import SkeletonPost from 'components/SkeletonPost';

export default function() {
	return (
		<div>
			<h2>Loading...</h2>
			<SkeletonPost />
		</div>
	);
}
