import { Component } from "react";

// styles
import '../styles/Square.css';

// container
import Pawn from "./Pawn";

export default class Square extends Component {
  constructor (props) {
    super(props);

    const tiles = [];
    for (let index = 0; index < 64; index++) tiles.push(index);
    this.state = {
      tiles: tiles
    };
  }

  render () {
    return this.state.tiles.map( tile =>
      {if (/* todo */) {
        return (
          <div className="square" key={tile} >
            <Pawn />
          </div>
        );
      } else {
        return <div className="square" key={tile} />;
      }}
    );
  }
}
