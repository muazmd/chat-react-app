import React from 'react';
import './login.css';
import {Button} from '@material-ui/core'
import {auth ,provider} from './firebase';  
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png"  alt=""/>
                <div>
                    <h1 className="login_text">sign in to Telegram</h1>
                </div>
                <Button  onClick={signIn}>
                    Sign in with Google
                </Button>

            </div>
        </div>
    )
}

export default Login