import React, { useState, useEffect } from 'react';
import './forms.scss';
import fire from './fire';
import Login from './login';

const Form = () => {

    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');

    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }



    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                        
                }
            })
    }


    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                        
                }
            })
    }

const handleLogout = () => {
    fire.auth().signOut();
};

const authListener = () => {
    fire.auth().onAuthStateChanged( user => {
        if(user){
            clearInputs();
            setUser(user);
        }else{
            setUser('');
        }
    })
}

    


    return (
    <div>
        <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        setEmailError={setEmailError}
        setPasswordError={setPasswordError}
        



        
        
        
        
        
        />
       


    </div>
    )
}

export default Form;

