// our-domain.com/news
import Link from 'next/link';
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewsMeetupPage = () => {
  const addMeetupHandler = (enteredMeetup) => {
    console.log(enteredMeetup);
  };

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewsMeetupPage;