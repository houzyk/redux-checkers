import { Component } from "react";

// styles
import '../styles/Board.css';

// containers
import Square from "./Square";

export default class Board extends Component {
  render () {
    return (
      <div className="board">
        <Square />
      </div>
    );
  }
}
