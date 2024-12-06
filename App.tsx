import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
import MainNvigation from './src/navigation/MainNavigation';

function App(): JSX.Element {
  
  return (
    <Provider store={store}>
      <MainNvigation />
    </Provider>
  );
}

export default App;
