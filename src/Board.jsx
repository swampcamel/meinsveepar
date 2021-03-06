import React, {Component} from 'react';
import {Button} from 'react-materialize';
import Square from './Square';
import './Board.scss';
import {connect} from 'react-redux';

class Board extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
  }
  renderSquare(i) {
      return(
        <Square id={i} key={i} gameBoard={this.props.gameBoard} bomb={this.props.gameBoard[i].bomb} visibilityClass={this.props.gameBoard[i].visibilityClass} />
      )
  }
  startNewGame() {
    const {dispatch} = this.props;
    const action = {type: 'NEW_GAME'};
    dispatch(action);
  }
  render() {
    return (
      <div className="game-board">
        <Button onClick={this.startNewGame} waves="light">New Game</Button>
      <div className="blah">
        {this.props.gameBoard.map((square, index) => this.renderSquare(index))}
      </div>
      </div>
    )
  }
}

export default connect()(Board);
