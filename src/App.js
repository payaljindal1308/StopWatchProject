import logo from './logo.svg';
import './App.css';
import React from 'react';
import StopWatchClasses from './StopWatchClasses.js'
import HooksCounter from './HooksCounter';
import StopWatch from './StopWacthHooks';
import Timer from './mynew';

import RouterApp from './RouteApp';
import { Router } from 'react-router';
function App() {
  return (
    <div className="App">
      <RouterApp/>
    </div>
  )
}

export default App;
