import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <nav className="navbar bg-primary">
                <i className={this.props.icon}>  {this.props.title}</i>
                <h1>Navbar</h1>
            </nav>
        )
    }
}

export default Navbar
