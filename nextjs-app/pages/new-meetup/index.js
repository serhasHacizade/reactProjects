// our-domain.com/news
import Link from 'next/link';
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewsMeetupPage = () => {
  const addMeetupHandler = async (enteredMeetup) => {
    const response = await fetch("/api/new-meetup", {
      method : "POST",
      body : JSON.stringify(enteredMeetup),
      headers : {
        "Content-type" : "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
    router.push("/")
  };

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewsMeetupPage;