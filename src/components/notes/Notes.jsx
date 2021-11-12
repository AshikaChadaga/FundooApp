import React, { useEffect, useState } from 'react'
import NotesIcon from '../notesicons/NotesIcon';
import MainNotesIcons from '../mainnotesicons/MainNotesIcons';
import './Notes.scss'
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import UserService from '../../service/UserService';
import PalleteIcon from '../palleteicon/PalleteIcon';
import MenuDropdown from '../menudropdown/MenuDropdown';

const userService = new UserService();

const bottomIcons = (
    <Box>
        <NotesIcon />
    </Box>

)

export default function Notes(props) {
    const [hovered, setActive] = useState(false);
    const [style, setStyle] = useState({display: 'none'});
    const [noteid, setNoteId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(false);

    const active = () => {
        setActive(true);
    }
    const inactive = () => {
        setActive(false);
    }
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
                console.error('Error encountered!', error);
            });

    }

    const bottomPart = (
        <Box sx={{ display: "flex" }}>
            <IconButton size="small">
                <AddAlertOutlinedIcon sx={{ margin: "5px" }} />
            </IconButton>
            <IconButton>
                <PersonAddAlt1OutlinedIcon sx={{ margin: "5px" }} />
            </IconButton>
            <IconButton>
                <PalleteIcon sx={{ margin: "5px" }} />
            </IconButton>
            <IconButton>
                <ImageOutlinedIcon sx={{ margin: "5px" }} />
            </IconButton>
            <IconButton>
                <ArchiveOutlinedIcon sx={{ margin: "5px" }} />
            </IconButton>
            <IconButton>
                <MenuDropdown sx={{ margin: "5px" }} />
            </IconButton>
            <IconButton>
                <UndoOutlinedIcon sx={{ margin: "5px" }} />
            </IconButton>
            <IconButton>
                <RedoOutlinedIcon sx={{ margin: "5px" }} />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Button
                onClick={updateNote}
                size="small"
                sx={{
                    color: "#5f6368",
                    textTransform: "none",
                    fontWeight: "bolder",
                    fontSize: "0.875rem"
                }}
            >Close
            </Button>
        </Box>
    );
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
                {props.notes.map((note) => (
                    <Box onMouseEnter={active} onMouseLeave={inactive}>
                        <div className="note">
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
                                {bottomIcons}
                            </div>
                        </div>
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
                            borderRadius: "10px"
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
                        <DialogActions>{bottomPart}</DialogActions>
                    </Paper>
                </Box>
            </Dialog>
        </div>
    )
}

