import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { IExperience, IExperienceAction } from '.';
import { create, update, read, _delete, change } from '.';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { ExperienceForm } from './experience-form';
import { Route } from 'react-router';


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
                            <Link to="experience/a">Add</Link>
                        </div>
                        <div className="col-xs-12">
                            {experience.list.length}
                            <ul>
                                {experience.list.map((e) =>
                                    (<li key={e.Id}
                                        onClick={(e) => {
                                            read(e.currentTarget.id);
                                        } }
                                        >
                                        <Link to={`experience/${e.Id}`}>
                                            {e.title}
                                        </Link>
                                    </li>)
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-9">
                        {this.props.children}
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


export const ExperienceRoute = (<Route path="experience" component={Experience} >
    <Route path=":id" component={ExperienceForm} />
</Route>);