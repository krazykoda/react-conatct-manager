import React, { useState, useEffect } from 'react';

export default function Add(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [tag, setTag] = useState('');

    const { submit, page, tags, edit, clear } = props

    useEffect(() => {
        if(edit) {
          setName(edit.name)  
          setEmail(edit.email)  
          setPhone(edit.phone)  
          setTag(edit.tag)  
        }
    }, [])
    
    
    const save = (e) => {
        e.preventDefault()
        const data = {
            id: Date.now(),
            name,
            email,
            phone,
            tag
        }
        submit(data);
        page()
    }

    //Close add/update page && clear edit data if any
    function cancel() {
        page()
        clear()
    }

    return (
        <div className="contact-form">
           <h1 className="App">Contact Form</h1> 

           <form onSubmit={(e)=> save(e)} autoComplete='off' >
               <div className="field" >
                   <label htmlFor="name">Name:</label><br/>
                   <input type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)} required />
               </div>

               <div className="field" >
                   <label htmlFor="email">Email: </label><br/>
                   <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value) } required />
               </div>

               <div className="field" >
                   <label htmlFor="phone-number">Phone Number:</label><br/>
                   <input type="number" name="phone-number" id="phone-number" value={phone} onChange={(e)=> setPhone(e.target.value) } required />
               </div>

               <div className="field" >
                   <label htmlFor="tag">Tag:</label><br/>
                   <input type="text" list="group" name="tag" id="tag" value={tag} onChange={(e)=> setTag(e.target.value)} required/>

                    <datalist id="group">
                        {tags.map((el,i) => <option value={el} key={i}> {el} </option> )}
                    </datalist>
               </div>

               <button type="submit">Save</button> 
               <button onClick={cancel}>Cancel</button>
           </form>
        </div>
    )
}
