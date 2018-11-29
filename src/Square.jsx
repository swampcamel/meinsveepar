import React from 'react';
import './Square.scss';

function Square(props) {
  return (
    <div className="square">{props.id}</div>
  )
}

export default Square;
