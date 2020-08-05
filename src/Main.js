import React, { useState } from "react"
import Home from './components/Home'
import Add from './components/Add'


  
const the = "hello"
let hello= ""

function Main() {
    const [contacts, setContacts] = useState('');
    const [tags, setTags] = useState([]);

    
    const handleSubmit = () => {
        hello = 'world';
        setContacts('hello')
      }


    return (
        <Home data={hello} />
    )

    
}





// export const home = () => (
//     <Home 
//         data={hello}
    
//     />
// ) 

// export function add() {
//     return (
//         <Add 
//             submit={handleSubmit}
//         />
//     )
// }

