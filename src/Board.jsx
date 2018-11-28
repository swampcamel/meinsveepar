import React, {Component} from 'react';
import {Button} from 'react-materialize';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    console.log(props)
    super(props);
  }
  renderSquare(i) {
    if((i) % 5 === 0) {
      console.log("beginning of row")
      return (
          <Square id={i + 1} key={i + 1} value={this.props.gameBoard[i]} />
      )
    } else if ((i + 1) % 5 === 0 ) {
      console.log("end of row")
      return(
      <Square id={i + 1} key={i + 1} value={this.props.gameBoard[i]} />
      <br/>
      )
    } else {
      console.log("middle of row")
      return (
        <Square id={i + 1} key={i + 1} value={this.props.gameBoard[i]} />
      )
    }
  }

  render() {
    return (
      <div className="blah">
        {this.props.gameBoard.map((square, index) => {
          return(this.renderSquare(index))
        })
      }
      </div>
    )
  }
}

export default Board;
