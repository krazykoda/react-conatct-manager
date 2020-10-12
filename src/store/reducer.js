const initialState = {
    contacts: [],
    tags: [],
}

const reducer = ( state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "addContact":
            const f = state.tags.find(itm => itm.toLowerCase() === payload.tag.toLowerCase())
            return {
                ...state, 
                contacts: [ ...state.contacts, payload ],
                tags: (!f)? [...state.tags, payload.tag] : state.tags
            }

        case "addTag":
            return {
                ...state, tags: [ ...state.tags, payload ]
            }

        case "deleteUser":
            const newContacts = state.contacts.filter(itm => itm.id !== payload);
            return { ...state, contacts: newContacts }

        case "editUser":
            return {
                ...state,
                contacts: state.contacts.map(itm => itm.id === payload.id? payload : itm)
            }

        case "allContacts": 
            const d = new Set()
            d.add(payload.map(itm => itm.tag ))
            return { contacts: payload, tags: [ ...d ] };
            
        default:
            return state;
    }
}

export default reducer
