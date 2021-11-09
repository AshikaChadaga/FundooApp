import NotesIcon from '../notesicons/NotesIcon';
import './Notes.scss'
import React from 'react'
import { Fade } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Box from "@mui/material/Box";

export default function Notes() {
    const [checked, setChecked] = React.useState(false);
    const open = () => {
        setChecked(true);
    }
    const close = () => {
        setChecked(false);
    }
    const listOfNotes = [
        {
            'title': 'TV Shows',
            'content': "The Office, Modern Family, Rick and Morty, Friends, How I Met Your Mother, The Simpsons, House MD, MasterChef"
        },
        {
            'title': 'Movies',
            'content': 'Boku no hero Academia: Futari no Hero, Avengers: End Game, Black Panther'
        },
        {
            'title': 'Books',
            'content': 'The house in the Cerulean Sea, The Invisible Life of Addie La Rue, Angels and Demons'
        },
    ];
    return (
        <div>
            <div className="notes">
                {listOfNotes.map((note, index) => (

                    <div className="note">
                        <div className="notes8">
                            <Box onMouseEnter={open} onMouseLeave={close}>
                                <span className="title">{note.title}</span><Fade in={checked}><PushPinOutlinedIcon style={{ color: "#5f6368" }} /></Fade>
                                <p className="content">{note.content}</p>
                            </Box>
                        </div>
                        <div className="icons"><NotesIcon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

