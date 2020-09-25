const action = (type, payload = {}) => {

    return (dispatch, state, { getFirestore }) => {

        // Add a new document with a generated id to firestore.
        getFirestore()
          .collection("contacts").doc(payload.id.toString())
          .set(payload)
          .then(() => {
            //dispatch to update the state
            dispatch({type, payload})
          })
          .catch(err => console.log(err))
    } 
};

export const addContact = (data) => action("addContact", data);
export const editUser = (data) => action("editUser", data);
export const deleteUser = (data) => action("deleteUser", data);
export const addTag = (data) => action("addTag", data);

export default action;