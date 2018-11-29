export default (state = {gameBoard: Array(25).fill({bomb: false})}, action) => {

  const loopRecursor = (squareArray) => {
    let randomSquareIndex = Math.floor(((Math.random()*25)));
    let squareToCheck = squareArray[randomSquareIndex];
    if (squareToCheck.bomb){
      randomSquareIndex = loopRecursor(squareArray);
    }
      return randomSquareIndex;
  }

  switch (action.type) {
    case 'NEW_GAME':
      let newState = Object.assign({}, {gameBoard: Array(25).fill({bomb: false})});
      for (let i = 0; i < 6; i++) {
        let squareIndex = loopRecursor(newState.gameBoard);
        newState.gameBoard[squareIndex] = {bomb: true};
      }
      return newState;
  default:
    return state;
  }
}
