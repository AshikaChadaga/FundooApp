import React from 'react'
import { useEffect, useState } from "react";
import UserService from '../../service/UserService';
import Notes from '../../components/notes/Notes';

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
            <Notes notes={archive.filter(each => each.isArchived==true && each.isDeleted == false)} displayNote = {displayNote}/>
        </div>
    )
}
