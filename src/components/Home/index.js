import React from 'react';

import './home.css';
import img from './star-wars.png'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = { query: '' };
    
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
        return <div className="text-center align-items-center container mt-5">
            <img src={img} className="img-fluid mb-5" alt="Star Wars" width="240" />
        
            <form onSubmit={this.submit}>
                <div className="form-group mb-4 w-50 mx-auto">
                    <input type="search" onChange={this.change} autoComplete="off" className="form-control form-control-lg" id="search" placeholder="Seek knowledge, you must..." autoFocus={true} value={this.state.query} />
                </div>
            </form>
        </div>
    }
}

export default Home;