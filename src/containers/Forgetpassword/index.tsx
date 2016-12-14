import * as React from 'react'; 
import {Button} from '@blueprintjs/core'
import {Router} from 'react-router';


type ForgetPasswordProps = {
    router: any
} 

type ForgetPasswordState = {}  

export class ForgetPassword extends React.Component<ForgetPasswordProps,ForgetPasswordState> { 
     constructor(props: ForgetPasswordProps, state: ForgetPasswordState){
         super(props, state);
         this.click = this.click.bind(this);
     }
     click(e:React.MouseEvent<HTMLElement>)  {
         console.log(e.target);  
         this.props.router.push('/');
     }
     
     render(){
         return( 
         <div>
            <Button text="Login" onClick={this.click} />
        </div>
        );
    }
 }