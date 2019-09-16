import React from 'react';

export default React.createContext ({
  random: Math.random (),
  updateRandom: () => {},
});
