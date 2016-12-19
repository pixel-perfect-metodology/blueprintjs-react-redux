import { INote, ITodo, IExperience } from '../models'
import { ICounter } from './../containers'

export type IStore = {
    counter: ICounter
    note: INote
    todo: ITodo
    experience: IExperience
}


