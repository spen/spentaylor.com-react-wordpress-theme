/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Paper from 'components/Paper';
import SkeletonBar from 'components/SkeletonBar';

export default function() {
	return (
		<Paper>
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
		</Paper>
	);
}
