import React, { createContext, useReducer, useEffect } from 'react';

import * as firebase from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import * as actionTypes from 'store/actions';
import accountReducer from 'store/accountReducer';

import config from 'config';

import Loader from 'ui-component/Loader';

if (!firebase.getApps().length) {
    firebase.initializeApp(config.firebase);
}

const FirebaseContext = createContext(null);

const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
};

export function FirebaseProvider({ children }) {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(
        () =>
            getAuth().onAuthStateChanged((user) => {
                if (user) {
                    dispatch({
                        type: actionTypes.LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user: {
                                id: user.uid,
                                email: user.email,
                                name: user.displayName || 'test',
                                photoURL: user.photoURL,
                                uid: user.uid,
                            },
                        },
                    });
                } else {
                    dispatch({
                        type: actionTypes.LOGOUT,
                    });
                }
            }),
        [dispatch],
    );

    const firebaseEmailPasswordSignIn = async (email, password) => {
        const auth = getAuth();
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res;
    };

    const firebaseGoogleSignIn = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { user } = result;
                // rm unused error
                console.log(token, user);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const { email } = error.customData;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // rm unused error
                console.log(errorCode, errorMessage, email, credential);
            });
    };

    const firebaseRegister = async (email, password) => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        getAuth().signOut();
    };

    const resetPassword = async (email) => {
        await getAuth().sendPasswordResetEmail(email);
    };

    const updateProfile = () => {};
    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <FirebaseContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                ...state,
                firebaseRegister,
                firebaseEmailPasswordSignIn,
                login: () => {},
                firebaseGoogleSignIn,
                logout,
                resetPassword,
                updateProfile,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
}

export default FirebaseContext;
