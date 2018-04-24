import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

import Board from './Board';
// import { observe } from './Game';


ReactDOM.render(
  <Board knightPosition={[7, 4]} />,
  document.getElementById('root')
);

// observe(knightPosition =>
//   ReactDOM.render(
//     <Board knightPosition={knightPosition} />,
//     document.getElementById('root')
//   );
// );
// registerServiceWorker();
