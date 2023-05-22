import EventForm from '../components/EventForm'

const NewEvent = () => {

  const submitHandler = (event) => {
    event.preventDefault();

  };


  return (
    <EventForm method="post" />
  )
}
export default NewEvent;

