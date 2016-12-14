import * as React from 'react';
import { ICounter, ICounterAction } from '../../models';
import { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/modules/counter'

type CounterProps = {
    counter: ICounter,
    increment: ActionCreator<ICounterAction>,
    decrement: ActionCreator<ICounterAction>
}

type CounterState = void

class CounterComponent extends React.Component<CounterProps, CounterState> {

    render() {
        const {increment, decrement, counter } = this.props;
        return (
            <div>
                <button
                    type="button"
                    className="pt-button pt-icon-add pt-intent-success"
                    name="incBtn"
                    onClick={increment}>
                    INCREMENT
        </button>
                <button
                    className="pt-button pt-icon-minus pt-intent-danger"
                    name="decBtn"
                    onClick={decrement}
                    disabled={counter.count <= 0}>
                    DECREMENT
        </button>
                <p>{counter.count}</p>
            </div>
        );
    }
}

export const Counter =  connect(
    (state) => ({ counter: state.counter }),
    (dispatch) => (
        {
            decrement: () => dispatch(decrement()),
            increment: () => dispatch(increment())
        }
    )
)(CounterComponent);