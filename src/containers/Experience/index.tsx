import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { IExperience, IExperienceAction } from '../../models';
import { create, update, read, _delete, change } from '../../redux/modules/experience';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';


type ExperienceProps = {
    experience: IExperience
    create: ActionCreator<IExperienceAction>
    update: ActionCreator<IExperienceAction>
    read: ActionCreator<IExperienceAction>
    _delete: ActionCreator<IExperienceAction>
    change: ActionCreator<IExperienceAction>
}

type ExperienceState = {
    editorState: any
}

export class ExperienceComponent extends React.Component<ExperienceProps, ExperienceState> {
    constructor(props: ExperienceProps) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    render() {
        const {experience, create, update, read, _delete, change } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-xs-3">
                        <div className="col-xs-12">
                            <button type="button" className="pt-button pt-icon-add" >Button</button>
                        </div>
                        <div className="col-xs-12">
                            {experience.list.length}
                            <ul>
                                {experience.list.map((e) =>
                                    (<li id={e.Id.toString()}
                                        onClick={(e) => {
                                            read(e.currentTarget.id);
                                        } }
                                        >{e.title}</li>)
                                )}
                            </ul>
                        </div>
                    </div>
                    <input type="hidden" value={experience.current.Id} />
                    <div className="col-xs-9">
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
                                this.setState({ editorState: e });
                            } }

                            />

                        <button type="button" className="pt-button pt-intent-success"
                            disabled={!experience.isValid}
                            onClick={(e) => {
                                if (experience.current.Id === 0)
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
                </div>

            </div>
        );
    }
}

export const Experience = connect(
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
)(ExperienceComponent);