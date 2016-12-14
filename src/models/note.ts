export type INote = {
    text : string
}

export type INoteAction = {
    type : 'UPDATE_NOTE',
    payload : string 
}