import React from 'react';

export default class Knight extends React.Component {
  render() {
    const knight = String.fromCharCode(0x2658);
    return <span>{knight}</span>
  }
}
