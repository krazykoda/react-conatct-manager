import React from 'react'
import { Redirect } from "react-router-dom";

const action = (type, payload = {}) => {

  return (dispatch, state, { getFirestore }) => {
    //Get document Reference
    const docRef = getFirestore().collection("contacts")

    if(type === "add") {
      // Add a new document with a generated id to firestore.
      docRef.doc(payload.id.toString())
      .set(payload)
      .then(() => {})
      .catch(err => console.log(err))

    }else {
      // Delete document from firestore.
      docRef.doc(payload.toString())
      .delete()
      .then(() => {})
      .catch(err => console.log(err))
    }
  }
};


//logout user
export const logout = () => {
  return (dispatch, state, { getFirebase }) => {
    getFirebase().auth().signOut()
    .then(() => <Redirect to=".login" />)
    .catch((err) => console.log(err))
  }
}


//Get all users from firstore
export const getContacts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts").orderBy("name", "asc")
      .onSnapshot( (snapshop) => {
        const contacts = [];
        snapshop.forEach((doc) => contacts.push(doc.data()));
        dispatch({
          type:"allContacts",
          payload: contacts
        })
      }, (err) => {
        console.log(err)
      })
  }
}



export default action;