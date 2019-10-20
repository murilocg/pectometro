import React from 'react';
import { CustomProvider } from './controller';
import View from './view';

const App = () => (
  <CustomProvider>
    <View />
  </CustomProvider>
);

export default App;
