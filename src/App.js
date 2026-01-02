import React from 'react';
import './App.css';

import VsCode from './components/VsCode';
import TopScreenMenuBar from './components/TopScreenMenuBar';
import Dock from './components/Dock';

const App = () => (
  <div className="app">
    <TopScreenMenuBar />
    <VsCode />
    <Dock />
  </div>
);

export default App;