import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    // FIXME: we only have one object so don't need an id!
    return {}; // { someId: props.id };
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

class Knight extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
  };
  render() {
    const { connectDragSource, isDragging } = this.props;
    const knight = String.fromCharCode(0x2658);
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: '10vh',
        fontWeight: 'bold',
        cursor: 'move',
      }}>
        {knight}
      </div>
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
