import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

const MeetUpDetails = (props) => {

  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description} />
  )
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect("mongodb+srv://{your name}:{your password}@cluster0.vz8lbjz.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db("");
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect("mongodb+srv://{your name}:{your password}@cluster0.vz8lbjz.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db("");
  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title.toString(),
        address: selectedMeetup.address.toString(),
        image: selectedMeetup.image.toString(),
        description: selectedMeetup.description.toString(),

      }
    }
  };
};

export default MeetUpDetails;