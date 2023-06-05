// /api/new-meetup
// POST /api/newmeetup

import { MongoClient } from 'mongodb';
import React from 'react';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect("mongodb+srv://erenfelek4:ToBdzFySncNxGHH0@cluster0.vz8lbjz.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db("");
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);  //authomatically generate an id
    console.log(result);
    client.close();
    res.status(201).json({message : "Meetup inserted!"});
  }
}

export default handler;