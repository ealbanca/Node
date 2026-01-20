//Imports Mongo connection
const mongodb = require('../db/connect'); 
// Imports ObjectId from the mongodb package
const ObjectId = require('mongodb').ObjectId;

//Similar to the previous assingment, it fetches all documents from the contacts collection in the database
const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};
//Fetches a single contact based on the provided ID in the request parameters
const getSingleContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

//Exports the functions to be used in other parts of the application
module.exports = {
  getAllContacts,
  getSingleContact,
};
