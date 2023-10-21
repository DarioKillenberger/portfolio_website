import React from 'react';
import './css/App.css';
import './css/StartPage.css';
import SkipPage from './pages/SkipPage/SkipPage';
import StartPage from './pages/StartPage/StartPage';
import WordGuesser from './page_components/WordGuesser';
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, Link, RouterProvider } from 'react-router-dom';
import MyProjects from './pages/MyProjects';


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
    element: <WordGuesser/>,
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
