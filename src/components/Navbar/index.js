import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import img from '../../img/star-wars.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.query
        }

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e) {
        this.setState({ query: e.target.value });
    }

    submit(e) {
        e.preventDefault();
        this.props.history.push('/search/' + this.state.query);
    }

    render() {
        return <nav className="navbar pt-4">
            <div className="container">
                <Link to="/topics" className="navbar-brand">
                    <img src={img} height="48" className="d-inline-block align-top" alt="Star Wars" />
                </Link>

                <div className="flex-fill mw-600">
                    <form className="form-inline w-100" onSubmit={this.submit}>
                        <input type="search" className="form-control w-100 form-control-lg form-control-search" placeholder="Seek knowledge you must" value={this.state.query} onChange={this.change} />
                    </form>
                </div>
                
            </div>
        </nav>
    }
}

export default withRouter(Navbar);