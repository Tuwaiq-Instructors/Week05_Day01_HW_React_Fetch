import React, { Component } from "react"
import Meme from "./Meme"

class Memes extends Component {
  state = {
    memesArray: null
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        const memesArray = data.data.memes
        console.log("getting data from fetch")
        this.setState({ memesArray: memesArray })
      })
  }

  render() {
    if (this.state.memesArray === null) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        {this.state.memesArray.map(meme => (
          <Meme key={meme.id} meme={meme} />
        ))}
      </div>
    )
  }
}

export default Memes
