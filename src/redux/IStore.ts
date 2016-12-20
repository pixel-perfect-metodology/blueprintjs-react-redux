import { IExperience } from '../containers/experience'
import { ICounter } from '../containers/counter'
import { ITodo } from '../containers/todo'
import { INote } from '../containers/note'


export type IStore = {
    counter: ICounter
    note: INote
    todo: ITodo
    experience: IExperience
}


