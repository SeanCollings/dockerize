import React, { Fragment, useState } from 'react';
import Context from '../contexts/contexts';

const apiUrl = document.getElementsByName('ag-app-url')[0].content;

const App = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random());
  console.log(apiUrl)

  const handleClick = () => {
    setRandomNumber(Math.random())
  }

  return (
    <div className="ui container">
      <div>
        Hello World!
      </div>
      <button
        className="ui button blue"
        onClick={() => handleClick()}
      >
        Click Me!
      </button>
      <Context.Provider value={{ random: randomNumber, apiUrl }}>
        <Context.Consumer>
          {({ random, apiUrl }) => <Fragment>
            <Fragment>
              {random}
            </Fragment>
            <div>
              {apiUrl}
            </div>
          </Fragment>}
        </Context.Consumer>
      </Context.Provider>
    </div>
  );
};

export default App;
