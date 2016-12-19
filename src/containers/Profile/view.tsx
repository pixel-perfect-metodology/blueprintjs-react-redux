import * as React from 'react';
import { Route } from 'react-router';


type ProfileProps = {}

type ProfileState = {}

export class Profile extends React.Component<ProfileProps, ProfileState> {
    render() {
        return (
            <div>
                Profile
        </div>
        );
    }
}


export const ProfileRoute = (<Route path="profile" component={Profile} />);