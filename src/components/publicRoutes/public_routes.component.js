import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useToken} from '../../customHooks/useToken'

const PublicRoutes = ({component: Component, restricted, token, ...otherProps}) =>  {


    React.useEffect(() => {
        console.log("PublicRoutes check token: ", token);
    }, token)

    return (

        <Route {...otherProps} render={props => (
            token && restricted ? 
            <Redirect to="/" /> : <Component {...props} />
        )} />
    )
}

export default PublicRoutes;