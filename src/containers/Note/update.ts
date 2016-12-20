import { INote, INoteAction } from './model'
import * as _ from 'lodash';

export const InitialState: INote = {
    text: ''
}

export const noteReducer = (state = InitialState, action: INoteAction) => {
    switch (action.type) {
        case 'UPDATE_NOTE':
            return _.assign<Object, INote, INote>({}, state, {
                text: action.payload
            })
        default:
            return state;
    }
}

export const update = (text: string): INoteAction => {
    return {
        type: 'UPDATE_NOTE',
        payload: text
    }
}