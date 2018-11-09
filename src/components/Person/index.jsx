import React from 'react'
import PropTypes from 'prop-types'
// import Navbar from '../Navbar/index'

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
    console.log(id)
    fetch(`http https://swapi.co/api/people/${id}`)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results,
          })

          console.log(this.state.results)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    // const { name } = this.state.
    return (
      <div>asd</div>
    )
  }
}

export default Person
