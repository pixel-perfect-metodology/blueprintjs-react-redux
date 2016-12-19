// const appConfig = require('../../../config/main');
import { ICounter } from './../containers'
import { routerMiddleware } from 'react-router-redux'
import { Middleware, Store, createStore, applyMiddleware, compose } from 'redux';
import { } from 'redux-thunk';
import { IStore } from './IStore';
import { rootReducer } from './reducers'
const createLogger = require('redux-logger');

const enhancers =
    (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(history, initialState: IStore): Store<IStore> {

    let middlewares: Middleware[] = [
        routerMiddleware(history),
        // thunk,
    ];

    /** Add Only Dev. Middlewares */
    // if (appConfig.env !== 'production' && process.env.BROWSER) {
    //     const logger = createLogger();
    //     middlewares.push(logger);
    // }

    // const composeEnhancers = (appConfig.env !== 'production' &&
    //     typeof window === 'object' &&
    //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store = createStore(rootReducer
        , initialState
        , enhancers(
            applyMiddleware(...middlewares)));

    // if (appConfig.env === 'development' && (module as any).hot) {
    //     (module as any).hot.accept('./reducers', () => {
    //         store.replaceReducer((require('./reducers')));
    //     });
    // }

    if ((<any>module).hot) {
        (<any>module).hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}