import React, { useState } from 'react'

export default function Home(props) {
    const { page, data, tags, del, edit } = props;
    const [list, setList ] = useState(data)

    //grouping contacts by tag names
    const handleGroup = (e) => {
        const g = e.target.value;
        
        if(g === 'all') {
            setList(data)
        }else {
            const newData = data.filter(el => el.tag.toLowerCase() === g);
            setList(newData)
        }  
    }

    //remove deleted contact from UI & database
    const remove = (i) => {
        //from UI
        const newData = list.filter(itm => itm.id !== i)
        setList(newData)
        //from Database
        del(i)
    }


    return (
        <div>
            <nav className="navbar">
                <h1>Contacts</h1>

                <div className="groups">
                    <select name="group" id="group" onChange={(e)=> handleGroup(e)} >
                        <option value='all' >All</option>
                        {tags.map((el,i) => <option value={el} key={i}> {el} </option> )}
                    </select>
                </div>
                
                <button onClick={page} >Add New</button>
    
            </nav>


            <table className="contact-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                </thead>
                    
                <tbody>
                    {list && list.map((itm)=> <Row key={itm.id} cont = {itm} id = {itm.id} action={remove} edit={edit} />)}    
                </tbody>
            </table>

        </div>
    )
}

//Table row component for Table body
function Row(props) {
    const { cont, id, action, edit  } = props;
    const { name, email, phone } = cont;

    return (
        <tr>
            <td> {name} </td>
            <td> {email} </td>
            <td> {phone} </td>
            <td >
                <button onClick={() => action(id)} >Delete</button>
                <button onClick={() => edit(id)} >Edit</button>
            </td> 
        </tr>
    )
}
