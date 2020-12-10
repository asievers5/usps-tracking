import axios from 'axios';
import * as actionTypes from './constants';


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

export const handleLogin = useCallback(
    async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
        await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
    } catch (error) {
        alert(error);
    }
    },
    [history]
);