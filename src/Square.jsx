import React from 'react';
import './Square.scss';

class Square extends React.Component {
  constructor(props) {
    super(props);
      let counter = 0;
      if (props.gameBoard[(props.id - 1)] && (props.id-1) % 5 !== 0 ) {
        console.log(props.gameBoard[(props.id - 1)].bomb)
        if (props.gameBoard[(props.id - 1)].bomb) {
          console.log("made it")
          counter ++;
        }
      }
      if (props.gameBoard[(props.id + 1)]) {
        if (props.gameBoard[(props.id + 1)].bomb) {
          counter ++;
        }
      }
      if (props.gameBoard[(props.id + 4)]) {
        if (props.gameBoard[(props.id + 4)].bomb) {
          counter ++;
        }
      }
      if (props.gameBoard[(props.id + 5)]) {
        if (props.gameBoard[(props.id + 5)].bomb) {
          counter ++;
        }
      }
      if (props.gameBoard[(props.id + 6)]) {
        if (props.gameBoard[(props.id + 6)].bomb) {
          counter ++;
        }
      }
      if (props.gameBoard[(props.id - 4)]) {
        if (props.gameBoard[(props.id - 4)].bomb) {
          counter ++;
        }
      }
      if (props.gameBoard[(props.id - 5)]) {
        if (props.gameBoard[(props.id - 5)].bomb) {
          counter ++;
        }
      }
      if (props.gameBoard[(props.id - 6)]) {
        if (props.gameBoard[(props.id - 6)].bomb) {
          counter ++;
        }
      }
    this.state = {squareClass: "hidden", surroundingBombs: counter};
  }

  checkSquare(bomb) {
    this.setState({squareClass: "shown"})
    if (bomb === true) {
      alert("YOURE DEAD")
    }
  }

  render() {
    return (
      <div onClick={() => {this.checkSquare(this.props.bomb)}} className="square">
        <span className={this.state.squareClass}>
          {this.props.bomb === true ? "X" : this.state.surroundingBombs }
        </span>
      </div>
    )
  }
}
export default Square;
