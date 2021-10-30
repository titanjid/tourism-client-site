import React from 'react';
import useAuth from './../../Auth/useAuth';
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
        <div>
            <button onClick={handleGoogleSingIn}>Google Sing In</button>
        </div>
    );
};

export default LogIn;