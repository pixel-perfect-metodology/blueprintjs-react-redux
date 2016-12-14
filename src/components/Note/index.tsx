
import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { INote, INoteAction } from '../../models';
import { update } from '../../redux/modules/note';


type NoteProps = {
    note: INote,
    update: ActionCreator<INoteAction>
}

type NoteState = void

export class NoteComponent extends React.Component<NoteProps, NoteState> {
    render() {
        const {note, update} = this.props;
        return (
            <div className="box">
                <textarea
                    placeholder="Notes....."
                    className="pt-input pt-fill"
                    dir="auto"
                    value={note.text} 
                    onChange={(e) => update(e.currentTarget.value)}>
                </textarea>
            </div>
        );
    }
}

export const Note = connect(
    (state) => ({ note: state.note }),
    (dispatch) => (
        {
            update: (a) => dispatch(update(a))
        }
    )
)(NoteComponent);