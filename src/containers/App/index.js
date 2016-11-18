/*
 * External Dependencies
 */
import React, { Component } from 'react';

/*
 * Internal Dependencies
 */
import Header from 'containers/Header';

export default class App extends Component {
    render() {
    	const { children } = this.props;

        return (
            <div>
            	<Header />
                { children }
            </div>
        );
    }
}
