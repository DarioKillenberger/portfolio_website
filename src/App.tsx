import React from 'react';
import './css/App.css';
import './css/StartPage.css';
import SkipPage from './pages/SkipPage/SkipPage';

function App() {
  return (
    <div className="App">
      <div className="gridContainer">
        <SkipPage/>
      </div>
    </div>
  );
}

export default App;
