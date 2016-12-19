import { ICounter, ICounterAction } from '..'
import * as _ from 'lodash';

export const InitialState: ICounter = {
    count: 0
}

export function counterReducer(state = InitialState, action: ICounterAction) {
    switch (action.type) {
        case 'INCREMENT':
            return _.assign<Object, ICounter, ICounter>({}, state, {
                count: state.count + 1
            });
        case 'DECREMENT':
            return _.assign<Object, ICounter, ICounter>({}, state, {
                count: state.count - 1
            });
        // return {
        //     count:state.count - 1
        // };

        default:
            return state;
    }
}

//Action Creator
export function increment(): ICounterAction {
    return {
        type: 'INCREMENT'
    }
}

export function decrement(): ICounterAction {
    return {
        type: 'DECREMENT'
    }
}