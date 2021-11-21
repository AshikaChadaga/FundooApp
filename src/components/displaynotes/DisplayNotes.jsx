import React, { useState } from 'react'
import { useEffect, useContext } from "react";
import UserService from '../../service/UserService';
import Notes from '../../components/notes/Notes';
import MainNotesIcons from '../mainnotesicons/MainNotesIcons';

const userService = new UserService();

export default function DisplayNotes(props) {
    const [notes, setNotes] = useState([]);

    const displayNote = () => {
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        };
        userService.displayNotes("/notes/getNotesList", config)
            .then((res) => {
                const data = res.data;
                let notes = data;
                setNotes(notes.data.data);
                console.log(notes);
                console.log("Notes Displayed!");
            })
            .catch(error => {
                console.error('Error encountered while Displaying Notes!', error);
            });
    }

    useEffect(() => {
        displayNote();
    }, []);

    return (
        <div>
            {props.mode == "search" ?
                
                    (props.searchWord.length !== 0 ?
                    <div>
                        <Notes mode="search" notes={notes.filter(each => (each.title.includes(props.searchWord) || each.description.includes(props.searchWord)) && (each.isDeleted == false))} displayNote={displayNote} />
                    </div>
                    : 
                    "Type To Search")
                
                :
                <div className="main-note">
                    <MainNotesIcons displayNote={displayNote} />
                    <Notes notes={notes.filter(each => each.isArchived == false && each.isDeleted == false)} displayNote={displayNote} />
                </div>
            }
        </div>
    )
}
