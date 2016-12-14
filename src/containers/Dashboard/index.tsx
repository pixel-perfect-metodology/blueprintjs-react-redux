import * as React from 'react';
import { Todo, Note } from '../../components'

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