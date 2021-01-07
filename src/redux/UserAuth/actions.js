import axios from 'axios';
import * as actionTypes from './constants';
import app from '../../firebase/base'


export const handleSignUp = (event) => {
    event.preventDefault(); //dont reload page after
    const { email, password } = event.target.elements;
    try {
        app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
        alert(error);
    }
}


export const handleLogin = (event) => {
    let { email, password } = event.target.elements;
    event.preventDefault();
    try {
        app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
        alert(error + "test");
    }
} 
