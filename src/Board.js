import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { canMoveKnight, moveKnight } from './Game';

class Board extends React.Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired,
    ).isRequired,
  };
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%'}}
           onClick={() => this.handleClick(x,y)}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x,y)}
        </BoardSquare>
      </div>
    );
  }
  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }
  handleClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }
  render() {
    const squares = [];
    for( let i=0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
          width: '90vh',
          height: '90vh',
          display: 'flex',
          flexWrap: 'wrap',
      }}>
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
