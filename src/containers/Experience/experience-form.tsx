import * as React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { IExperience, IExperienceAction } from '.';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { create, update, read, _delete, change } from './update';




type experienceFormProps = {
    experience: IExperience
    create: ActionCreator<IExperienceAction>
    update: ActionCreator<IExperienceAction>
    read: ActionCreator<IExperienceAction>
    _delete: ActionCreator<IExperienceAction>
    change: ActionCreator<IExperienceAction>
    params: any
}

type experienceFormState = {
    editorState: any
}

export class ExperienceFormComponent extends React.Component<experienceFormProps, experienceFormState> {
    constructor(props) {
        super(props);
    }
    render() {
        const {experience, create, update, read, _delete, change } = this.props;

        return (
            <div>
                <input type="hidden" value={experience.current.Id} />

                <input className="pt-input pt-fill" type="text"
                    placeholder="Title" dir="auto"
                    value={experience.current.title}
                    onChange={(e) =>
                        change({
                            ...experience.current,
                            title: e.currentTarget.value
                        })
                    }
                    />
                <input className="pt-input pt-fill" type="text"
                    placeholder="Slug" dir="auto"
                    value={experience.current.slug}
                    onChange={(e) => change({
                        ...experience.current,
                        slug: e.currentTarget.value
                    })}
                    />
                <input className="pt-input pt-fill" type="text"
                    placeholder="Category" dir="auto"
                    value={experience.current.category}
                    onChange={(e) => change({
                        ...experience.current,
                        category: e.currentTarget.value
                    })}
                    />
                <Editor
                    toolbarClassName="home-toolbar"
                    wrapperClassName="home-wrapper"
                    editorClassName="home-editor"
                    onChange={(e) => {
                        change({
                            ...experience.current,
                            body: 'kunjan'
                        })
                        this.setState({ editorState: e });
                    } }

                    />

                <button type="button" className="pt-button pt-intent-success"
                    disabled={!experience.isValid}
                    onClick={(e) => {
                        if (experience.current.Id === '')
                            create(experience.current);
                        else
                            update(experience.current);
                    } }
                    >Save</button>
                <button type="button" className="pt-button pt-intent-danger"
                    disabled={!experience.isDelete}
                    onClick={(e) => _delete(experience.current.Id)}
                    >Delete</button>
            </div>
        );
    }
}


export const ExperienceForm = connect(
    (state) => ({ experience: state.experience }),
    (dispatch) => (
        {
            create: (a) => dispatch(create(a)),
            update: (a) => dispatch(update(a)),
            read: (a) => dispatch(read(a)),
            _delete: (a) => dispatch(_delete(a)),
            change: (a) => dispatch(change(a))
        }
    )
)(ExperienceFormComponent);