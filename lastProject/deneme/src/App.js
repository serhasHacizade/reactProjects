import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditDetail";
import EventRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events", element: <EventRootLayout />, children: [
          {
            index: true, element: <EventsPage />, loader: async () => {
              const response = await fetch('http://localhost:8080/events');

              if (!response.ok) {
                //...
              } else {
                const resData = await response.json();
                return resData.events;
              }
            }
          },
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