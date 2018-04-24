import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { canMoveKnight, moveKnight } from './Game';
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props, monitor) {
    // FIXME: monitor.getItem to receive dragged item
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class BoardSquare extends React.Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
  };
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;
    console.log('isOver:', isOver);
    const black = (x + y) % 2 === 1;
    return (
      <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
      }}>
        <Square black={black} >
          {this.props.children}
        </Square>
        {isOver &&
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: 'yellow',
          }} />
        }
      </div>
    );
  }
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
