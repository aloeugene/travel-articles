import React from 'react';
import { createAppContainer } from 'react-navigation';
import Travel from './navigation/Travel';

const AppContainer = createAppContainer(Travel);

const App = () => <AppContainer />

export default App;
