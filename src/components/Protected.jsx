import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function Protected({ component , auth, ...rest }) {
    if(!auth.isLoaded) return null

    if(auth.uid) {
        return <Route {...rest} component={component} />
    } else return <Redirect to="/login" />
    
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Protected) 
