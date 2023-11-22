import React from 'react';
import './css/App.css';
import './css/StartPage.css';
import StartPage from './pages/StartPage/StartPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyProjects from './pages/MyProjects';
import WordPage from './pages/WordPage';
import ResumePage from './pages/ResumePage';
import ResumeV2 from './pages/ResumeV2';


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
  {
    path: "/resume",
    element: <ResumeV2/>,
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
