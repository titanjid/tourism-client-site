import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './../Auth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user,loding } = useAuth();
    if(loding){
        return"loding........"
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;