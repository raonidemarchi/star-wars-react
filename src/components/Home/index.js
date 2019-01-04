import React from 'react'
import PropTypes from 'prop-types'
import img from '../../img/star-wars.svg'

class Home extends React.Component {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func }),
  }

  constructor(props) {
    super(props)

    this.state = { query: '' }

    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(e) {
    this.setState({ query: e.target.value })
  }

  submit(e) {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.query}`)
  }

  render() {
    return (
      <div className="text-center d-flex container h-80vh">
        <div className="align-self-center w-100">
          <img src={img} className="img-fluid mb-5" alt="Star Wars" width="240" />

          <form onSubmit={this.submit}>
            <div className="form-group mb-4 mx-auto mw-600">
              <input type="search" onChange={this.change} autoComplete="off" className="form-control form-control-lg form-control-search" placeholder="Seek knowledge you must..." autoFocus value={this.state.query} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Home
