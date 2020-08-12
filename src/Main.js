import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


/* 
    How to pass down props when using react router
*/
export default function Main() {
    const [contact, setContact] = useState(['name','name2','name3'])

    return (
        <Router>
            <Route path="/home" render={() => <Home v={contact} />} exact />
            <Route path="/add" render={()=> <Add v="Add Page" />} exact />
        </Router>
    )  
}


function Home(props) {

    return (
        <div  style={styles}>
            <h1>Contact Page </h1>

            <ul>
                {props.v.map((itm, i) => <li key={i}  > {itm} </li>)}
            </ul>

            <Link to='/add'>
                <button>Add</button>
            </Link>
        </div>
    )
}

function Add(props) {

    const [name, setName] = useState('')

    return (
        <div  style={styles}>
        <h1>This is the {props.v} </h1>

        <form>
            <input type="text" placeholder="enter name" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Save</button>
        </form>

        <Link to='/home'>
            <button>Home</button>
        </Link>
        </div>
    )
}

const styles = {
    textAlign: 'center',
    width: '500px',
    margin: '0 auto'
}


