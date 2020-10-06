import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import action from "../store/action";

function Edit(props) {
    const { contact, tags, dispatch, history } = props
    
    const [updated, setUpdated] = useState(contact)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUpdated({
           ...updated,
           [name]: value 
        })
    }
    
    const save = (e) => {
        e.preventDefault()

        dispatch("add", updated);
        history.push("/")
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
                        value={updated.name} 
                        onChange={ handleChange } 
                        required 
                    />
               </div>

               <div className="field" >
                   <label htmlFor="email">Email: </label><br/>
                   <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={updated.email} 
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
                        value={updated.phone} 
                        onChange={ handleChange } 
                        required 
                    />
               </div>

               <div className="field" >
                   <label htmlFor="tag">Tag:</label><br/>
                   <input 
                        type="text" 
                        list="group" 
                        name="tag" 
                        id="tag" 
                        value={updated.tag} 
                        onChange={ handleChange } 
                        required
                    />

                    <datalist id="group">
                        {tags.map((el,i) => <option value={el} key={i}> {el} </option> )}
                    </datalist>
               </div>

               <button type="submit">Save</button> 
               <Link to="/"><button>Cancel</button></Link>
           </form>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        tags: state.tags,
        contact: state.contacts.find(itm => itm.id.toString() === ownProps.match.params.id)
    }
}

const mapDispatchToProps = {
   dispatch : action
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);