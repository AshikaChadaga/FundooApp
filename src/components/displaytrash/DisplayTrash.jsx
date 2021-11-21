import React from 'react'
import { useEffect, useState } from "react";
import UserService from '../../service/UserService';
import Notes from '../../components/notes/Notes';
const userService = new UserService();

export default function DisplayTrash() {
    const [archive, setArchive] = useState([]);

    const displayNote = () => {
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        };
        userService.displayDeletedNotes("/notes/getTrashNotesList", config)
            .then((res) => {
                const data = res.data;
                let archive = data;
                setArchive(archive.data.data);
                console.log(archive);
                console.log(" Deleted Notes Displayed!");
            })
            .catch(error => {
                console.error('Error encountered while Displaying Deleted Notes!', error);
            });
    }

    useEffect(() => {
        displayNote();
    }, []);

    return (
        <div>
            <Notes notes={archive} displayNote = {displayNote}/>
        </div>
    )
}
