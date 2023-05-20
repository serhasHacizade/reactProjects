import React from 'react';
import EventItem from '../components/EventItem';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <EventItem event={data.event} />
  )
}

export default EventDetail;

export const loader = async ({ params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch details for selected event" }, { status: 500 });
  } else {
    return response;
  }
};

export const action = async ({request, params}) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/", eventId, {method : request.method});
  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  } else {
    return response;
  }
  return redirect("/events");
};