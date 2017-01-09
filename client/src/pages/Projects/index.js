/**
 * External Dependencies
 */
import { get } from 'lodash';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import PageTransition from 'components/PageTransition';
import {
	setActiveProject,
	setDefaultProject,
} from 'state/projects/actions';

export class ProjectsPage extends React.Component {

	componentDidMount() {
		const slug = get( this.props, 'params.slug' );
		this.props.setProject( slug );
	}

	componentWillUpdate( nextProps ) {
		const slug = get( nextProps, 'params.slug' );
		this.props.setProject( slug );
	}

	render() {
		const { children, location } = this.props;

		return (
			<DocumentTitle title="Projects | Spen Taylor">
				<PageTransition location={ location }>
					{ children }
				</PageTransition>
			</DocumentTitle>
		);
	}
}

export default connect(
	null,
	dispatch => ( {
		setProject: slug => dispatch( slug ? setActiveProject( slug ) : setDefaultProject() ),
	} )
)( ProjectsPage );
