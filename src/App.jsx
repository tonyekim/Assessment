import { useState } from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Employer from "./components/Employer";
import JobSeeker from "./components/JobSeeker";
import SearchJobs from "./components/SearchJobs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <AppProvider>
      <Route>
        <Route  path="/" element={<Home />} />
        <Route  path="/employee" element={<Employer />} />
        <Route  path="/jobseeker" element={<JobSeeker />} />
        <Route  path="/search_job" element={<SearchJobs />} />

      </Route>
      // </AppProvider>
    )

    // createBrowserRouter([
    //   {
    //     path: "/",
    //     element: <Home />,
    //     loader: rootLoader,
    //     children: [
    //       {
    //         path: "employee",
    //         element: <Employer />,
    //         loader: eventLoader,
    //       },
    //     ],
    //   },
    // ])
  );

  return (
    
      <RouterProvider router={router} />
    
  )
}

export default App;
