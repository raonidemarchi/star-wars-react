import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.query
        }
    }

    render() {
        return <nav className="navbar">
            <div className="container">
                <form>
                    <input className="form-control w-100" type="search" placeholder="Search" aria-label="Search" value={this.state.query} />
                </form>
            </div>
        </nav>
    }
}

export default Navbar;