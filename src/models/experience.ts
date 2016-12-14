export type IExperienceModel = {
    Id: number,
    title: string,
    slug: string,
    category: string,
    body: string
}


export type IExperience = {
    current: IExperienceModel
    list: IExperienceModel[]
    isValid: boolean
    isDelete: boolean
}

export type IExperienceAction = {
    type: 'CREATE_EXP' | 'READ_EXP' | 'UPDATE_EXP' | 'DELETE_EXP' | 'CHANGE_EXP',
    payload: IExperienceModel | string
}