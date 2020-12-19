import axios from 'axios';
import * as actionTypes from './constants';
import app from '../../firebase/base'
import { useHistory } from "react-router-dom";

/*
export const handleSignUp = useCallback(async event => {
    event.preventDefault(); //dont reload page after
    const { email, password } = event.target.elements;
    try {
        await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
    } catch (error) {
        alert(error);
    }
    }, [history]);
*/

export const handleLogin = (event) => {
    let { email, password } = event.target.elements;
    console.log("THIS HAPPENED");
    event.preventDefault();
    try {
        console.log(`${email.value} ${password.value}`)
        app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
        alert(error + "test");
    }
} 
