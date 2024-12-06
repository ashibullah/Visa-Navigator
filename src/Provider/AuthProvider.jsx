import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    
    const auth = getAuth(app);

    const createUserUsingGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const emailLogin = (email, password) => {
        return (signInWithEmailAndPassword(auth, email, password))
    }
    const emailSignup = (email, password) => {
        return (createUserWithEmailAndPassword(auth, email, password))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }

    })
    const logout = () => {
        return signOut(auth);
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)

    }
    const authInfo = {
        createUserUsingGoogle,
        user,
        setUser,
        logout,
        
        emailLogin,
        emailSignup,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;