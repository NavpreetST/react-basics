import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Exercise from './exercise1.js'
import Ternary from './ternary.js';
import List from './list.js';
import List_ternary_exercise from './list_ternary_exercise.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <List_ternary_exercise />,
  <List />,
  <Ternary />,
  <Exercise />,
    <App />,
    
  
);


