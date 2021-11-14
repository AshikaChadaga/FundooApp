import React, { useEffect, useState } from 'react'
import NotesIcon from '../notesicons/NotesIcon';
import MainNotesIcons from '../mainnotesicons/MainNotesIcons';
import './Notes.scss'
import Box from '@mui/material/Box';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from "@mui/material/IconButton";
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import UserService from '../../service/UserService';

const userService = new UserService();


export default function Notes(props) {
    const [noteid, setNoteId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("#fff");
    const [isArchived, setIsArchived] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const handleClickOpen = (note) => {
        setOpen(true);
        setTitle(note.title);
        setNoteId(note.id);
        setDescription(note.description);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const updateNote = () => {
        handleClose();
        let data = {
            noteId: noteid,
            title: title,
            description: description,
        }
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        };
        userService.updateNotes("/notes/updateNotes", data, config)
            .then(() => {
                console.log("Notes Updated!");
                props.displayNote();
                console.log("Display updated notes called");
            })
            .catch(error => {
                console.error('Error encountered While Updating!', error);
            });

    }

    const takenotes = (
        <Box sx={{ display: "flex" }}>
            <InputBase onChange={(e) => setTitle(e.target.value)} defaultValue={title} placeholder="Title" sx={{ flexGrow: "1" }} />
            <IconButton>
                <PushPinOutlinedIcon />
            </IconButton>
        </Box>
    );

    const noteDiv = () => {
        return (
            <div className="notes">
                {props.notes.filter(each => each.isArchived == false && each.isDeleted == false).map((note) => (
                    <Box >
                        <Paper className="note" sx={{
                            border: "1px solid lightgray",
                            borderRadius: "10px",
                            backgroundColor: note.color,
                            padding: "5%"
                        }}>

                            <div className="note-content" onClick={() => handleClickOpen(note)}>
                                <span className="title">{note.title}</span>
                                <span className="pin-icons">
                                    <IconButton size="small" >
                                        <PushPinOutlinedIcon style={{ color: "#5f6368" }} />
                                    </IconButton>
                                </span>
                                <p className="content">{note.description}</p>
                            </div>
                            <div className="icons">
                                <NotesIcon handleClose={handleClose} setIsDeleted={setIsDeleted} setIsArchived={setIsArchived} displayNote={props.displayNote} noteId={note.id} setColor={setColor} mode="update" />
                            </div>
                        </Paper>
                    </Box>
                ))}
            </div>
        );
    }

    return (
        <div>
            <div className="main-note">
                <MainNotesIcons displayNote={props.displayNote} />
            </div>
            <div className="notesdiv">
                {noteDiv()}
            </div>
            <Dialog open={open} onClose={handleClose}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        justifyContent: "space-between"
                    }}
                >
                    <Paper
                        sx={{
                            padding: "5px 20px 5px 20px",
                            border: "1px solid lightgray",
                            borderRadius: "10px",
                            backgroundColor: color
                        }}
                    >
                        {takenotes}
                        <Box>
                            <InputBase
                                defaultValue={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Take a note... "
                                multiline
                                fullWidth
                                sx={{ flexGrow: 1, padding: "20px 0" }}
                            />
                        </Box>
                        <DialogActions><Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                            <NotesIcon setIsDeleted={setIsDeleted} handleClose={handleClose} setIsArchived={setIsArchived} displayNote={props.displayNote} noteId={noteid} setColor={setColor} mode="update" />
                            <Button onClick={updateNote} size="small" sx={{ color: '#5f6368', textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem' }}>Close</Button>
                        </Box></DialogActions>
                    </Paper>
                </Box>
            </Dialog>
        </div>
    )
}

