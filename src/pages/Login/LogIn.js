import React from 'react';
import useAuth from './../../Auth/useAuth';
import './login.css'
import { useLocation, useHistory } from 'react-router-dom';

const LogIn = () => {
    const {singInWithGoogle,setUser}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSingIn=()=>{
        singInWithGoogle()
        .then(result=> {  
            const user = result.user;
            setUser(user);
            history.push(redirect_uri);
          })
    }
    return (
        <div className="login">
            <h2>Plase Login Tourist Ticket Service Website</h2>
            <button onClick={handleGoogleSingIn} className="mb-5 mt-5 btn btn-primary">Google Sing In</button>
        </div>
    );
};

export default LogIn;