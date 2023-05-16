import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as loaderEvents } from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditDetail";
import EventRootLayout from "./pages/EventsRoot";
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement : <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events", element: <EventRootLayout />, children: [
          {index: true, element: <EventsPage />, loader: loaderEvents},
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ]
      }
    ]
  },
]);

const App = () => { return (<RouterProvider router={router} />) }

export default App;