import React from 'react';
import './css/App.css';
import './css/StartPage.css';
import SkipPage from './pages/SkipPage/SkipPage';
import StartPage from './pages/StartPage/StartPage';
import ChangeText from './components/ui/ChangeText';

function App() {
  return (
    <div className="App">
      <div className="gridContainer">
        <StartPage/>
      </div>
    </div>
  );
}

export default App;
