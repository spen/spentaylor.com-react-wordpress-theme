import React, { Component } from 'react';

export default class AppLayout extends Component {
    render() {
        return (
            <div>
                <h2>Index</h2>
                { this.props.children }
            </div>
        );
    }
}
