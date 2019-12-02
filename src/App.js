import React from 'react';
import { CustomProvider } from './controller';
import View from './view';
import './shared/axiosAuth';

const App = () => (
  <CustomProvider>
    <View />
  </CustomProvider>
);

export default App;
