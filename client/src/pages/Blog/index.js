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
	setActivePost,
	setDefaultPost,
} from 'state/blog/actions';

export class BlogPage extends React.Component {

	componentDidMount() {
		const slug = get( this.props, 'params.slug' );
		this.props.setPost( slug );
	}

	componentWillUpdate( nextProps ) {
		const slug = get( nextProps, 'params.slug' );
		this.props.setPost( slug );
	}

	render() {
		const { children, location } = this.props;

		return (
			<DocumentTitle title="Blog | Spen Taylor">
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
		setPost: slug => dispatch( slug ? setActivePost( slug ) : setDefaultPost() ),
	} )
)( BlogPage );
