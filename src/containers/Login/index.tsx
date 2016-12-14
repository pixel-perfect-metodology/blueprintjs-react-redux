import * as React from 'react';
import { Link } from 'react-router';


type LoginProps = {}

type LoginState = {}

export class Login extends React.Component<LoginProps, LoginState> {
    render() {
        return (
            <div>
                Login 
                <Link to="forgetpassword">Forget Password</Link>
            </div>
        );
    }
}