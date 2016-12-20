import * as React from 'react'
import { Router, IndexRoute, Route, browserHistory, hashHistory } from 'react-router';
import { configureStore } from '../../redux/store'
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect } = require('redux-connect');
import { Provider } from 'react-redux';
import { Layout } from '../layout';
import { DashbaordRoute, Dashbaord } from '../dashboard';
import { ProfileRoute } from '../profile';
import { InitialState as ToDoInitialState } from '../todo'
import { InitialState as NoteInitialState } from '../note'
import { ExperienceRoute, InitialState as ExperienceInitialState } from '../experience'
import { CounterRoute, InitialState as CounterInitialState } from '../counter';
import { Login } from '../login'
import { ForgetPassword } from '../forgetpassword'

const store = configureStore(
    hashHistory,
    {
        counter: CounterInitialState,
        note: NoteInitialState,
        todo: ToDoInitialState,
        experience: ExperienceInitialState
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
                        {DashbaordRoute}
                        {CounterRoute}
                        {ExperienceRoute}
                        {ProfileRoute}
                    </Route>
                    <Route path="login" component={Login} />
                    <Route path="forgetpassword" component={ForgetPassword} />
                </Router>
            </Provider>
        );
    }
}
