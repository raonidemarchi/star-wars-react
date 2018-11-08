import React from 'react';
import Navbar from '../Navbar';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props.match.params.query,
            error: null,
            isLoaded: false,
            results: []
        }
    }

    componentDidMount() {
        this.fetchResults();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.query !== this.state.query) {
            return this.setState({ query: this.props.match.params.query });
        }

        if (prevState.query !== this.state.query) {
            this.fetchResults();
        }
    }

    fetchResults() {
        this.setState({ isLoaded: false });

        fetch('https://swapi.co/api/people/?search=' + this.state.query)
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    isLoaded: true,
                    results: result.results
                });

                console.log(this.state.results)
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    diffDates(date) {
        let today = new Date();
        let targetDate = new Date(date);

        let timeDiff = Math.abs(today.getTime() - targetDate.getTime());
        let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        if (daysDiff > 364) {
            return parseInt(daysDiff / 365) + ' years';
        }

        return daysDiff + ' days';
    }

    render() {
        const { error, isLoaded, results, query } = this.state;
        const navbar = <Navbar query={query} />;

        if(error) {
            return <div>
                {navbar}

                <div className="container mt-5 text-white">
                    {error}
                </div>
            </div>
        }

        if (!isLoaded) {
            return <div>
                {navbar}

                <div className="container mt-5 text-white">
                    Loading...
                </div>
            </div>
        }

        return <div>
            {navbar}

            <div className="container mt-5 text-white">
                <div className="row">
                    {results.map(result => (
                        <div key={result.url} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className="card bg-dark shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{result.name}</h5>
                                    <p className="card-text">
                                        <small className="text-white-50">Last edited {this.diffDates(result.edited)} ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    }
}

export default Search;