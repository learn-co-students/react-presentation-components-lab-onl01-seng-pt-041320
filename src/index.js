import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

// let onClick = () => {
//   return "not"
// }

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={undefined} />
  </div>,
  document.getElementById('root')
);