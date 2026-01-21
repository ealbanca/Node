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

//Function to post a new contact to the database
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact); // Uses insertOne to add the new contact
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

//Function to update a contact by ID
const updateContact= async (req, res) =>{
  const userId = new ObjectId(req.params.id);

  const contact ={
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db().collection('contacts').replaceOne({_id: userId}, contact); //Uses replaceOne to update the contact
  if (response.modifiedCount > 0){
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

//Funtion to delete a contact by ID
const deleteContact = async(req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('contacts').deleteOne({_id: userId}); //Uses deleteOne to delete the contact
  if (response.deletedCount > 0){
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }

};


//Exports the functions to be used in other parts of the application
module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};
