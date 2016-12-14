import * as React from 'react';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core'

export class Layout extends React.Component<any, any>{
    public render() {
        return (
            <div>
                <nav className="pt-navbar .modifier">
                    <div className="pt-navbar-group pt-align-left">
                        <div className="pt-navbar-heading">Blueprint</div>
                        <input className="pt-input" placeholder="Search files..." type="text" />
                    </div>
                    <div className="pt-navbar-group pt-align-right">
                        <a className="pt-button pt-minimal pt-icon-home" href="#/">Home</a>
                        <a className="pt-button pt-minimal pt-icon-document" href="#/experience">Experience</a>
                        <a className="pt-button pt-minimal pt-icon-document" href="#/counter">Counter</a>
                        <span className="pt-navbar-divider"></span>
                        <a className="pt-button pt-minimal pt-icon-user" href="#/profile"></a>
                        <a className="pt-button pt-minimal pt-icon-notifications"></a>
                        <a className="pt-button pt-minimal pt-icon-cog"></a>
                    </div>
                </nav>
                <br/>
                <div className="row">
                    <div className="col-xs">
                        {this.props.children}
                    </div>
                </div>
                
            </div>
        );
    }
}