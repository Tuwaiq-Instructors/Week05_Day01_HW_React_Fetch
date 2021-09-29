import React, { Component } from "react"

class Meme extends Component {
  state = {
    show: false
  }

  handleShow = e => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleShow}>{this.props.meme.name}</h2>
        {this.state.show ? (
          <img width="300" src={this.props.meme.url} alt="" />
        ) : null}
      </div>
    )
  }
}

export default Meme
