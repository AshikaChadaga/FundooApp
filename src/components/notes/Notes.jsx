import React, { useEffect, useState } from 'react'
import NotesIcon from '../notesicons/NotesIcon';
import MainNotesIcons from '../mainnotesicons/MainNotesIcons';
import './Notes.scss'
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from "@mui/material/IconButton";

// import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
// import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
// import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
// import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
// import { Button } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import { styled } from "@mui/material/styles";


// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     "& .MuiDialogContent-root": {
//         padding: theme.spacing(2)
//     },
//     "& .MuiDialogActions-root": {
//         padding: theme.spacing(1)
//     }
// }));

export default function Notes(props) {
    const [hovered, setActive] = React.useState(false);

    const active = () => {
        setActive(true);
    }
    const inactive = () => {
        setActive(false);
    }

    const bottomIcons = (
        <Box>
            <NotesIcon />
        </Box>

    )

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const bottomPart = (
    //     <Box sx={{ display: "flex" }}>
    //         <IconButton>
    //             <AddAlertOutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <IconButton>
    //             <PersonAddAlt1OutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <IconButton>
    //             <ColorLensOutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <IconButton>
    //             <ImageOutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <IconButton>
    //             <ArchiveOutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <IconButton>
    //             <MoreVertOutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <IconButton>
    //             <UndoOutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <IconButton>
    //             <RedoOutlinedIcon sx={{ margin: "10px" }} />
    //         </IconButton>
    //         <Box sx={{ flexGrow: 1 }}></Box>
    //         <Button
    //             onClick={handleClose}
    //             size="small"
    //             sx={{
    //                 color: "#5f6368",
    //                 textTransform: "none",
    //                 fontWeight: "bolder",
    //                 fontSize: "0.875rem"
    //             }}
    //         >
    //             Close
    //         </Button>
    //     </Box>
    // );
    // const takenotes = (
    //     <Box sx={{ display: "flex" }}>
    //         <InputBase placeholder="Title" sx={{ flexGrow: "1" }} />
    //         <IconButton>
    //             <PushPinOutlinedIcon />
    //         </IconButton>
    //     </Box>
    // );

    return (
        <div>
            <div className="main-note">
                <MainNotesIcons displayNote={props.displayNote}/>
            </div>
            <div className="notes">
                {props.notes.map((note) => (
                    <Box onMouseEnter={active} onMouseLeave={inactive}>
                        <div className="note" >{/*onClick={handleClickOpen}*/}
                            <div className="note-content">
                                <span className="title">{note.title}</span>
                                <Fade in={hovered}>
                                    <IconButton size="small" >
                                        <PushPinOutlinedIcon style={{ color: "#5f6368" }} />
                                    </IconButton>
                                </Fade>
                                <p className="content">{note.description}</p>
                            </div>
                            <div className="icons">
                                <Fade in={hovered}>{bottomIcons}</Fade>
                            </div>
                        </div>
                        {/* <BootstrapDialog onClose={handleClose} open={open}>
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
                                            placeholder="Take a note... "
                                            multiline
                                            fullWidth
                                            sx={{ flexGrow: 1, padding: "20px 0" }}
                                        />
                                    </Box>
                                    <DialogActions>{bottomPart}</DialogActions>
                                </Paper>
                            </Box>
                        </BootstrapDialog> */}

                    </Box>
                ))}
            </div>
        </div>
    )
}

