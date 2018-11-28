import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Board from './Board';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Board gameBoard={this.props.gameBoard}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameBoard: state.gameBoard
  }
}

export default connect(mapStateToProps)(App);
