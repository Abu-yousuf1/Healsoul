import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    console.log("useFire", user)
    const auth = getAuth();

    // Sign-in with Google section.....................
    const signWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // .....................
    useEffect(() => {

        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })

    }, [])

    // log Out section...............
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // Create user with email and password....................
    const createUserWithEmail = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                setUserName(name)
                setUser(user)
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            })

    }

    // Login with email and password......................
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { })
    }



    return {
        user,
        error,
        signWithGoogle,
        createUserWithEmail,
        loginWithEmail,
        logout
    }


}

export default useFirebase;