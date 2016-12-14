import * as React from "react";
import {Button} from '@blueprintjs/core'

interface ITestingProps {};

interface ITestingState {};

export class Test1 extends React.Component<ITestingProps, ITestingState> {
    public render(): JSX.Element {
        return (
            <div>
                <Button text="sample" className="pt-button pt-intent-success" />
                <p>Test1</p>
                <br/>
            </div>
            );
    }
}

export class Test2 extends React.Component<any,any>{
    public render(){
        return (
            <div>
                <p>Test2</p>
            </div>
        );
    }
}

export class Test3 extends React.Component<any,any>{
    public render(){
        return (
            <div>
                <p>Test3</p>
            </div>
        );
    }
}






