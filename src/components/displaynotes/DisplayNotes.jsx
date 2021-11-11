import React from 'react'
import { useEffect, useState } from "react";
import UserService from '../../service/UserService';
import Notes from '../../components/notes/Notes'

const userService = new UserService();

export default function DisplayNotes() {
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
                console.log(notes.data.data);
                console.log("Notes Displayed!");
            })
            .catch(error => {
                console.error('Error encountered!', error);
            });
    }

    useEffect(() => {
        displayNote();
    }, []);

    return (
        <div>
            <Notes notes={notes} displayNote={displayNote}/>
        </div>
    )
}
