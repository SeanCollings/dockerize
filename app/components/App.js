import React, { Fragment, useState } from 'react';
import Context from '../contexts/contexts';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random());

  const handleClick = () => {
    setRandomNumber(Math.random())

  }

  return (
    <div className="ui container">
      <div>
        Hello World!123
      </div>
      <button
        className="ui button blue"
        onClick={() => handleClick()}
      >
        Click Me!
      </button>
      <Context.Provider value={{ random: randomNumber }}>
        <Context.Consumer>
          {({ random }) => <Fragment>{random}</Fragment>}
        </Context.Consumer>
      </Context.Provider>
    </div>
  );
};

export default App;
