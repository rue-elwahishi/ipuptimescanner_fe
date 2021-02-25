import React from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom';
import {useToken} from '../../customHooks/useToken';

const PrivateRoute = ({component:Component, token,
...otherProps})  => {
    // const history = useHistory()
    console.log('private routes token', token)

    return ( 
        <Route {...otherProps} render={props => (
            token ? <Component {...props} />
            : <Redirect to="/login"/>
        )} />
        
    )
}

export default PrivateRoute;