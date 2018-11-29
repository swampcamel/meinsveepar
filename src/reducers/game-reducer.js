export default (state = {gameBoard: Array(25).fill({bomb: false})}, action) => {

  switch (action.type) {
    case 'NEW_GAME':
      let newState = Object.assign({}, state);
      newState.gameBoard.forEach(square => square.bomb = false);
      for (let i = 0; i < 6; i++) {
        newState.gameBoard[Math.floor((Math.random()*25)+1)] = {bomb: true};
      }
      return newState;
  default:
    return state;
  }
}
