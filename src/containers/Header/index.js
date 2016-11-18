/*
 * External Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Header extends Component {
    render() {
        return (
            <ul role="nav">
                <li><Link to="/">Root</Link></li>
                <li><Link to="/example">Example</Link></li>
            </ul>
        );
    }
}
