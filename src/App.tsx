import React from 'react';
import './css/App.css';
import './css/StartPage.css';
import StartPage from './pages/StartPage/StartPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MyProjects from './pages/MyProjects';
import WordPage from './pages/WordPage';
import ResumePage from './pages/ResumePage';
import ResumeV2 from './pages/ResumeV2';
import ResumeV3 from './pages/ResumePageV3';
import NavigationBar from './page_components/NavigationBar';
import { useState, useContext, createContext } from 'react';

// const ProgressBarContext = createContext(0); //use useContext to pass progress value to navigation bar component, and also to update it from the other pages.

const router = createBrowserRouter([{
  path: "/", 
  element: <NavbarWrapper/>,
  children:[
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
  {
    path: "/resume",
    element: <ResumeV3/>,
    // errorElement: <ErrorPage />,
  },
  ]
}]);

function NavbarWrapper(){
  return (
  <div>
    <div className="gridContainer">
      <NavigationBar/>
      <Outlet/>
      </div>
  </div>
  )
};

function App() {
  return (
    <>
    <div className="App">
      {/* <div className="gridContainer"> */}
        <RouterProvider router={router} />
      {/* </div> */}
    </div>
    </>
  );
}

export default App;
