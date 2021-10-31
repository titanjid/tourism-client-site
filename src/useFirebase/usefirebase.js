import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";
import initializeAuthentication from './../firebase/firebase.init';

initializeAuthentication()


const useFirebase=()=>{
    const[user,setUser]=useState();
    const [loding,setLoding]=useState(true);
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();

        const singInWithGoogle=()=>{
            return signInWithPopup(auth, googleProvider);
        }
        const logOut = () => {
            signOut(auth)
                .then(() => {
                    setUser({})
                })
        }
        useEffect(() => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                    }
                else {
                    setUser({})
                    }
                    setLoding(false)
                    })
                }, [])
        return{
            singInWithGoogle,
            user,
            setUser,
            logOut,
            loding
        }
}

export default useFirebase;