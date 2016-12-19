import { IExperience } from '../containers/experience'
import { ICounter } from '../containers/counter'
import { ITodo } from '../components/todo'
import { INote } from '../components/note'


export type IStore = {
    counter: ICounter
    note: INote
    todo: ITodo
    experience: IExperience
}


