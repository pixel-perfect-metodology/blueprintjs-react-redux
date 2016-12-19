import { IExperience, IExperienceAction, IExperienceModel } from '../../../models'
import * as _ from 'lodash';
import * as lib from '../../../lib'
import * as uuid from 'uuid';

export const InitialState: IExperience = {
    current: {
        Id: '',
        title: '',
        slug: '',
        category: '',
        body: ''
    },
    list: <IExperienceModel[]>[],
    isValid: false,
    isDelete: false
};

export const experienceReducer = (state = InitialState, action: IExperienceAction) => {
    console.log(action.payload);
    switch (action.type) {
        case 'CREATE_EXP':
            let new1 = {
                ...<IExperienceModel>action.payload,
                Id: uuid.v4()
            }
            return {
                ...state,
                list: [...state.list, new1],
                current: { ...InitialState.current }
            };
        case 'READ_EXP':
            let r = _.find(state.list, (a) => { return a.Id === (<string>action.payload) });
            return {
                ...state,
                current: r
            };
        case 'UPDATE_EXP':
            let r1 = _.findIndex(state.list, (a) => { return a.Id === (<IExperienceModel>action.payload).Id });
            console.log(r1);
            return {
                ...state,
                list: [...state.list.slice(0, r1), <IExperienceModel>action.payload, ...state.list.slice(r1 + 1)],
                current: { ...InitialState.current }
            };
        case 'DELETE_EXP':
            let r2 = _.findIndex(state.list, (a) => { return a.Id === (<IExperienceModel>action.payload).Id });
            return {
                ...state,
                list: [...state.list.slice(0, r2), ...state.list.slice(r2 + 1)]
            };
        case 'CHANGE_EXP':
            let ex = <IExperienceModel>action.payload
            return {
                ...state,
                current: <IExperienceModel>action.payload,
                isValid: lib.IsNullOrEmpty(ex.title) && lib.IsNullOrEmpty(ex.slug) && lib.IsNullOrEmpty(ex.category) && lib.IsNullOrEmpty(ex.body),
                isDelete: (ex.Id !== '')
            }
        default:
            return state;
    }
}

/**Action Creators */

export const create = (exp: IExperienceModel): IExperienceAction => {
    return {
        type: 'CREATE_EXP',
        payload: exp
    }
}

export const read = (id: string): IExperienceAction => {
    return {
        type: 'READ_EXP',
        payload: id
    }
}

export const update = (exp: IExperienceModel): IExperienceAction => {
    return {
        type: 'UPDATE_EXP',
        payload: exp
    }
}

export const _delete = (exp: IExperienceModel): IExperienceAction => {
    return {
        type: 'DELETE_EXP',
        payload: exp
    }
}

export const change = (exp: IExperienceModel): IExperienceAction => {
    return {
        type: 'CHANGE_EXP',
        payload: exp
    }
}