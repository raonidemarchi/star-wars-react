import React from 'react';
import Navbar from '../Navbar';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.match.params.query
        }
    }

    render() {
        return <div>
            <Navbar query={this.state.query} />

            <div className="container mt-5">
                
            </div>
        </div>
    }
}

export default Search;