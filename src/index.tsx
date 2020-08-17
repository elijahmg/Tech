import React, { FC } from 'react';
import ReactDOM from 'react-dom';

const App: FC = () => {
  return (
    <div>
      Hello from react
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));