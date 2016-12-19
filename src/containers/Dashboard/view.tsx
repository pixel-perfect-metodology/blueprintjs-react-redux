import * as React from 'react';
import { Route } from 'react-router';
import { Note } from '../../components/note'
import { Todo } from '../../components/todo'

type DashbaordProps = {}

type DashbaordState = {}

export class Dashbaord extends React.Component<DashbaordProps, DashbaordState> {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        Dashbaord
                    </div>
                    <div className="col-xs-offset-1 col-xs-3 pt-card pt-elevation-1">
                        <Todo />
                    </div>
                    <div className="col-xs-offset-1 col-xs-3 pt-card pt-elevation-1">
                        <Note />
                    </div>
                    <div className="col-xs-4">
                    </div>
                </div>
            </div>
        );
    }
}


export const DashbaordRoute = (<Route path="dashboard" component={Dashbaord} />);