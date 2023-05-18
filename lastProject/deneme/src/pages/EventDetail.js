import React from 'react';
import EventItem from '../components/EventItem';
import { json, useLoaderData } from 'react-router-dom';

const EventDetail = () => {
  const data = useLoaderData();
  return (
    <EventItem event={data.event} />
  )
}

export default EventDetail;

export const loader = async ({ params }) => {
  const id = params.eventId;
  const response = fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch details for selected event" }, { status: 500 });
  } else {
    return response;
  }
};