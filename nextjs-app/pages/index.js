// our-domain.com/
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://yarimadatur.com/images/20180001/large/1649742597.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a first meetup"
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "https://yarimadatur.com/images/20180001/large/1649742597.jpg",
    address: "Some address 8, 123456 some city",
    description: "This is a first meetup"
  },
];

const HomePage = (props) => {

  return (<MeetupList meetups={props.meetups} />);
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect("mongodb+srv://erenfelek4:q44UHKBOC8hW85Hi@cluster0.vz8lbjz.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db("");
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title : meetup.title,
        address : meetup.address,
        image : meetup.image,
        id : meetup._id.toString(),
      }))
    },
    revalidate: 10
  };
};
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props : {
//       meetups : DUMMY_MEETUPS
//     },
//     revalidate : 
// }
// }; 

export default HomePage;