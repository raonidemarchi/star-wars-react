import React from 'react';

import img from '../Home/star-wars.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.query
        }

        this.change = this.change.bind(this);
    }

    change(e) {
        this.setState({ query: e.target.value });
    }

    render() {
        return <nav className="navbar">
            <div className="container py-2 d-flex">
                <div className="flex-fill">
                    <img src={img} height="48" className="d-inline-block align-top" alt="Star Wars" />
                </div>
                
                <div className="flex-fill">
                    <form className="form-inline w-100">
                        <input type="search" className="form-control w-100 form-control-lg form-control-search" placeholder="Seek knowledge you must" value={this.state.query} onChange={this.change} />
                    </form>
                </div>
            </div>
        </nav>
    }
}

export default Navbar;