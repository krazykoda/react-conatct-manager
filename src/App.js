import React, {useState } from 'react';
import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import Add from './components/Add';


let editData = null

function App() {
  const [page, setPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const [tags, setTags] = useState([]);


  const homePage = () => {
    setPage(2)
  }

  const addPage = () => {
    setPage(1)
  }

  const handleSubmit = (d) => {
    if(editData) {
      const index = contacts.findIndex(itm => itm.id === editData.id)
      const newdata = [...contacts]
      newdata[index] = d
      setContacts(newdata)

      editData = null

    }else {
      setContacts([...contacts, d])
    
      const t = d.tag.toLowerCase();
      const f = tags.find(itm => itm === t)
    
      if(!f) setTags([...tags, t])
    }
    
  }

  const handleDelete = (i) => {
    const newList = contacts.filter(itm => itm.id !== i)
    setContacts(newList)
  }

  const handleEdit = (i) => {
    const newData = contacts.find(itm => itm.id === i)
    editData = newData
    setPage(2)
  }


  function clearEdit() {
    editData = null
  }



  if(page === 1) {
    return <Home
              page={homePage}
              data = {contacts}
              tags = {tags}
              del = {handleDelete}
              edit = {handleEdit}
            />
  } else return <Add 
                  page={addPage} 
                  tags = {tags}
                  submit = { handleSubmit }
                  edit = {editData}
                  clear = {clearEdit}
                />

}

export default App;
