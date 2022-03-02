import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react'
import firebaseInitilization from "../Pages/LogIn/Firebase/FirebaseInit";

firebaseInitilization()
const useFirebase = () => {
    const [users, setUsers] = useState({})
    //const [errors, setErrors] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)

            .then((result) => {

                const user = result.user;
                console.log(user)
                setUsers(user)
            })
            .finally(() => setIsLoading(false));




    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)

            } else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            console.log("success")

        })
            .finally(() => setIsLoading(false));

    }


    return {
        users,
        logOut,
        isLoading,
        signInUsingGoogle
    }

}

export default useFirebase;