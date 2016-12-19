import * as React from 'react';
import { Link } from 'react-router'
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
                        <Link to="/" className="pt-button pt-minimal pt-icon-home">Home</Link>
                        <Link to="experience" className="pt-button pt-minimal pt-icon-document">Experience</Link>
                        <Link to="counter" className="pt-button pt-minimal pt-icon-document">Counter</Link>
                        <span className="pt-navbar-divider"></span>
                        <a className="pt-button pt-minimal pt-icon-user" href="#/profile"></a>
                        <a className="pt-button pt-minimal pt-icon-notifications"></a>
                        <a className="pt-button pt-minimal pt-icon-cog"></a>
                    </div>
                </nav>
                <br />
                <div className="row">
                    <div className="col-xs">
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}