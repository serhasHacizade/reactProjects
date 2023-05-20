import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, { loader as eventsDetail, action as deleteEventAction } from "./pages/EventDetail";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventsRoot";
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId", id: "event-detail", loader: eventsDetail, children: [
              { index: true, action : deleteEventAction, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ]
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ]
      }
    ]
  },
]);

const App = () => { return (<RouterProvider router={router} />) }

export default App;