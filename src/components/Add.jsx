import React, { useState } from 'react';
import { connect } from "react-redux";
import action from "../store/action";
import { Link } from "react-router-dom";

function Add(props) {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        tag: ""   
    })
    
    const {  tags, dispatch, history } = props

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact({
           ...contact,
           [name]: value 
        })
    }
    
    
    const save = (e) => {
        e.preventDefault()

        const data = {
            id: Date.now(),
            ...contact
        }

        dispatch("add",data);
        history.push("/");
    }


    return (
        <div className="contact-form">
           <h1 className="App">Contact Form</h1> 

           <form onSubmit={(e)=> save(e)} autoComplete='off' >
               <div className="field" >
                   <label htmlFor="name">Name:</label><br/>
                   <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={contact.name} 
                        onChange={handleChange} 
                        required 
                    />
               </div>

               <div className="field" >
                   <label htmlFor="email">Email: </label><br/>
                   <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={contact.email} 
                        onChange={ handleChange } 
                        required 
                    />
               </div>

               <div className="field" >
                   <label htmlFor="phone-number">Phone Number:</label><br/>
                   <input 
                        type="number" 
                        name="phone" 
                        id="phone-number" 
                        value={contact.phone} 
                        onChange={ handleChange } 
                        required 
                    />
               </div>

               <div className="field" >
                   <label htmlFor="tag">Tag:</label><br/>
                   <input 
                        type="text" 
                        list="group" 
                        name="tag" id="tag" 
                        value={contact.tag} 
                        onChange={ handleChange } 
                        required
                    />

                    <datalist id="group">
                        {tags.map((el,i) => <option value={el} key={i}> {el} </option> )}
                    </datalist>
               </div>

               <button type="submit">Save</button> 
               <Link to="/">
                    <button>Cancel</button>
               </Link>
               
           </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tags: state.contactState.tags
    }
}

const mapDispatchToProps = {
   dispatch : action
}


export default connect(mapStateToProps, mapDispatchToProps)(Add);
