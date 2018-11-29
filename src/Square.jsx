import React from 'react';
import './Square.scss';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {squareClass: "hidden"};
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
          {this.props.bomb === true ? "X" : ":)" }
        </span>
      </div>
    )
  }
}
export default Square;
