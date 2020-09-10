import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import action from '../store/action';

function Home(props) {
    const { contacts, tags, dispatch  } = props;
    const [list, setList ] = useState(contacts);

    //grouping contacts by tag names
    const handleGroup = (e) => {
        const g = e.target.value;
        
        if(g === 'all') {
            setList(contacts)
        }else {
            const newData = contacts.filter(el => el.tag.toLowerCase() === g);
            setList(newData)
        }  
    }

    //remove deleted contact from UI & database
    const remove = (i) => {
        // //from UI
        const newData = list.filter(itm => itm.id !== i)
        setList(newData)
        // //from Database
        dispatch("deleteUser", i)
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

                <Link to="/add">
                    <button>Add New</button>
                </Link>
                
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
                    {list && list.map((itm)=> (
                        <Row 
                            key={itm.id} 
                            cont = {itm} 
                            id = {itm.id} 
                            action={remove} 
                        />
                    ))}    
                </tbody>
            </table>

        </div>
    )
}

//Table row component for Table body
function Row(props) {
    const { cont, id, action } = props;
    const { name, email, phone } = cont;

    return (
        <tr>
            <td> {name} </td>
            <td> {email} </td>
            <td> {phone} </td>
            <td >
                <button onClick={() => action(id)} >Delete</button>
                <Link to={`/edit/${id}`} ><button>Edit</button></Link>
            </td> 
        </tr>
    )
}


const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        tags: state.tags
    }
}

const mapDispatchToProps = {
    dispatch: action
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
