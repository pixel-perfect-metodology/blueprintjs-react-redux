import * as React from 'react'
import { Router, IndexRoute, Route, browserHistory, hashHistory } from 'react-router';
import { configureStore } from '../../redux/store'
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect } = require('redux-connect');
import { Provider } from 'react-redux';
import * as counter from '../../redux/modules/counter'
import * as note from '../../redux/modules/note'
import * as todo from '../../redux/modules/todo'
import * as experience from '../../redux/modules/experience'


import {
    Layout
    , Experience
    , Profile
    , Dashbaord
    , Login
    , ForgetPassword
    , Counter
} from '..';

const store = configureStore(
    browserHistory,
    {
        counter: counter.InitialState,
        note: note.InitialState,
        todo: todo.InitialState,
        experience: experience.InitialState
    }
);
const history = syncHistoryWithStore(hashHistory, store);
const connectedCmp: any = (props) => <ReduxAsyncConnect {...props} />;

type AppProps = {};
type AppState = {};

export class App extends React.Component<AppProps, AppState>{
    render() {
        return (
            <Provider store={store} key="provider">
                <Router history={history} render={connectedCmp}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Dashbaord}>
                        </IndexRoute>
                        <Route path="dashboard" component={Dashbaord} />
                        <Route path="profile" component={Profile} />
                        <Route path="counter" component={Counter} />
                        <Route path="experience" component={Experience} />

                    </Route>
                    <Route path="login" component={Login} />
                    <Route path="forgetpassword" component={ForgetPassword} />
                </Router>
            </Provider>
        );
    }
}
