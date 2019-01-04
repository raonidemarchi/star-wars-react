import React from 'react'
import PropTypes from 'prop-types'

class Person extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }

  constructor(props) {
    super(props)

    this.state = {
      id: props.match.params.id,
      error: null,
      isLoaded: false,
      result: {},
    }
  }

  componentDidMount() {
    return this.fetchPerson(this.state.id)
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params

    if (id !== prevProps.match.params.id) {
      this.fetchPerson(id)
    }

    return true
  }

  fetchPerson(id) {
    fetch(`https://swapi.co/api/people/${id}/`)
      .then(res => res.json())
      .then(
        (result) => { this.setState({ isLoaded: true, result }) },
        (error) => { this.setState({ isLoaded: true, error }) }
      )
  }

  render() {
    const { result, isLoaded } = this.state

    if (!isLoaded) {
      return (
        <div className="container">
          Loading...
        </div>
      )
    }

    return (
      <div className="container">
        <h1>{result.name}</h1>
      </div>
    )
  }
}

export default Person
