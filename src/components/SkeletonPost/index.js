/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Paper from 'components/Paper';
import SkeletonPulse from 'components/SkeletonPulse';
import Content from './Content';

export default function() {
	return (
		<Paper>
			<div style={ { padding: '10px 30px 30px 30px' } } >
				<SkeletonPulse>
					<Content />
				</SkeletonPulse>
			</div>
		</Paper>
	);
}
