import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/index'

class Search extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ query: PropTypes.string }),
    }),
  }

  constructor(props) {
    super(props)

    this.state = {
      query: props.match.params.query,
      error: null,
      isLoaded: false,
      results: [],
    }
  }

  componentDidMount() {
    return this.fetchResults(this.state.query)
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props.match.params

    if (query !== prevProps.match.params.query) {
      this.fetchResults(query)
    }

    return true
  }

  fetchResults(query) {
    this.setState({ isLoaded: false })

    fetch(`https://swapi.co/api/people/?search=${query}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results,
          })

          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  diffDates = (date) => {
    const timeDiff = Math.abs(new Date().getTime() - new Date(date).getTime())
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    const yearsDiff = Math.trunc(daysDiff / 365)

    if (daysDiff > 364) {
      return `${yearsDiff} years`
    }

    return `${daysDiff} days`
  }

  render() {
    const { error, isLoaded, results, query } = this.state
    const navbar = <Navbar query={query} />

    if(error) {
      return (
        <div>
          {navbar}

          <div className="container mt-5 text-white">
            {error}
          </div>
        </div>
      )
    }

    if (!isLoaded) {
      return (
        <div>
          {navbar}

          <div className="container mt-5 text-white">
            Loading...
          </div>
        </div>
      )
    }

    return (
      <div>
        {navbar}

        <div className="container mt-5 text-white">
          <div className="row">
            {results.map(result => (
              <div key={result.url} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <Link to={`/person/${result.url.match(/\d+/g)[0]}/${result.name.replace(/[ ]/, '-')}`}>
                  <div className="card bg-dark shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{result.name}</h5>
                      <p className="card-text">
                        <small className="text-white-50">Last edited {this.diffDates(result.edited)} ago</small>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Search
