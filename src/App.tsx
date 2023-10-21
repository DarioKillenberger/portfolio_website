import React from 'react';
import './css/App.css';
import './css/StartPage.css';
import SkipPage from './pages/SkipPage/SkipPage';
import StartPage from './pages/StartPage/StartPage';
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, Link, RouterProvider } from 'react-router-dom';
import MyProjects from './pages/MyProjects';
import WordPage from './pages/WordPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <StartPage/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/wordGuess",
    element: <WordPage/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <MyProjects/>,
    // errorElement: <ErrorPage />,
  },

]);

function App() {

  return (
    <>
    <div className="App">
      <div className="gridContainer">
        <RouterProvider router={router} />
      </div>
    </div>
    </>
  );
}

export default App;
