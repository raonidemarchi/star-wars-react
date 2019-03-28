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
    this.fetchPerson(this.state.id)
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params

    if (id !== prevProps.match.params.id) {
      this.fetchPerson(id)
    }
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
        <div className="container v-align-center">
          Loading...
        </div>
      )
    }

    return (
      <div className="container v-align-center">
        <a href="javascript:window.history.back()">
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 48 48" fill="#fff">
            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          </svg>
        </a>
        <h1>{result.name}</h1>
      </div>
    )
  }
}

export default Person
