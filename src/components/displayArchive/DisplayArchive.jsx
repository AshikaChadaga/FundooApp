import React from 'react'
import { useEffect, useState } from "react";
import UserService from '../../service/UserService';
import ArchivedOrDeletedNotes from '../archivedordeletednotes/ArchivedOrDeletedNotes';

const userService = new UserService();

export default function DisplayArchive() {
    const [archive, setArchive] = useState([]);
    
    const displayNote = () => {
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        };
        userService.displayArchivedNotes("/notes/getArchiveNotesList", config)
            .then((res) => {
                const data = res.data;
                let archive = data;
                setArchive(archive.data.data);
                console.log(archive);
                console.log(" Archived Notes Displayed!");
            })
            .catch(error => {
                console.error('Error encountered while Displaying Archived Notes!', error);
            });
    }

    useEffect(() => {
        displayNote();
    }, []);

    return (
        <div>
            <ArchivedOrDeletedNotes archive={archive} displayNote={displayNote}/>
        </div>
    )
}
