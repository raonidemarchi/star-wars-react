import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import img from '../../img/star-wars.svg'

class Navbar extends React.Component {
  static propTypes = {
    query: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = { query: props.query }

    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(e) {
    this.setState({ query: e.target.value })
  }

  submit(e) {
    const { query } = this.state
    const { props } = this

    e.preventDefault()

    // empty query
    if (query.query === '') {
      return
    }

    props.history.push(`/search/${query}`)
  }

  render() {
    const { query } = this.state

    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/topics" className="navbar-brand d-block d-sm-none mx-auto mb-2">
            <img src={img} height="32" className="d-inline-block align-top" alt="Star Wars" />
          </Link>

          <Link to="/topics" className="navbar-brand mr-5 d-none d-sm-block">
            <img src={img} height="48" className="d-inline-block align-top" alt="Star Wars" />
          </Link>

          <div className="flex-fill mw-600">
            <form className="form-inline w-100" onSubmit={this.submit}>
              <input type="search" className="form-control w-100 form-control-lg form-control-search" placeholder="Seek knowledge you must..." value={query} onChange={this.change} />
            </form>
          </div>

        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
