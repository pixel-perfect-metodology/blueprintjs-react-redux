import { ICounter, INote, ITodo, IExperience } from '../models'

export type IStore = {
    counter: ICounter
    note: INote
    todo: ITodo
    experience : IExperience
}


