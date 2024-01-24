import React from 'react';
import './css/App.css';
import './css/StartPage.css';
import StartPage from './pages/StartPage/StartPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MyProjects from './pages/MyProjects';
import WordPage from './pages/WordPage';
import ResumeV3 from './pages/ResumePageV3';
import AboutMePage from './pages/AboutMePage';
import NavigationBar from './page_components/NavigationBar';
// import { useState, useContext, createContext } from 'react';

// navLinks object. If navigation paths change, only need to update here
// The text property defines what will be displayed on the navigation bar
const navLinks = [
  {text: "Home", path:"/home"},
  {text: "Word Guesser", path:"/wordGuess"},
  {text: "Projects", path:"/projects"},
  {text: "Maze", path:"/maze"},
  {text: "About Me", path:"/about-me"},
]

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
    path: navLinks[0].path,
    element: <StartPage/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: navLinks[1].path,
    element: <WordPage/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: navLinks[2].path,
    element: <MyProjects/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: navLinks[3].path,
    element: <ResumeV3/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: navLinks[4].path,
    element: <AboutMePage/>,
    // errorElement: <ErrorPage />,
  },
  ]
}]);

function NavbarWrapper(){
  return (
  <div>
    <div className="gridContainer">
      <NavigationBar navLinks={navLinks}/>
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
