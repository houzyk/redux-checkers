import { Component } from "react";

// styles
import '../styles/Square.css';

class Square extends Component {
  constructor (props) {
    super(props);

    const tiles = [];
    for (let index = 0; index < 64; index++) tiles.push(index);
    this.state = {
      tiles: tiles
    };
  }

  render () {
    return (
      <>
        {this.state.tiles.map(t => <div className="square" key={t} />)}
      </>
    );
  }
}

export default Square;
