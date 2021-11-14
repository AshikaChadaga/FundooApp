import React, { useEffect, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UserService from '../../service/UserService';
import { Button } from '@mui/material';
import NotesIcon from '../notesicons/NotesIcon';

const userService = new UserService();

function MainNotesIcons(props) {
    const [checked, setChecked] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [color, setColor] = useState("#fff");
    const [isArchived, setIsArchived] = useState("false");
    const [isDeleted, setIsDeleted] = useState("false");
    const [useEffectCall, setUseEffectCall] = useState(false);
    const open = () => {
        setChecked(true);
    }
    const close = () => {
        setChecked(false);
    }

    const saveNote = () => {
        close();
        let data = {
            title: title,
            description: content,
            color: color,
            isArchived: isArchived
        };
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        };
        userService.addNotes("/notes/addNotes", data, config)
            .then(() => {
                console.log("Notes Added!");
                props.displayNote();
                console.log("Display notes called");
            })
            .catch(error => {
                console.error('Error encountered While Adding Notes!', error);
            });
        setTitle("");
        setContent("");
        setColor("#fff");
        setIsArchived(false);
    }

    const notestitle = (
        <Box sx={{ display: 'flex' }}>
            <InputBase
                value={title}
                name="title"
                placeholder="Title"
                sx={{ flexGrow: '1' }}
                onChange={(e) => setTitle(e.target.value)}
            />
            <IconButton><PushPinOutlinedIcon /></IconButton>
        </Box>
    );

    useEffect(()=> {
        saveNote();
    }, [useEffectCall])

    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', marginLeft: '25vw', justifyContent: 'space-between' }}>
                <Paper sx={{ padding: '5px 20px 5px 20px', border: '1px solid lightgray', borderRadius: '10px', backgroundColor: color }}>
                    <Collapse in={checked}>{notestitle}</Collapse>
                    <Box>
                        <InputBase
                            value={content}
                            name="description"
                            placeholder="Take a note... "
                            multiline
                            maxRows={5}
                            onFocus={open}
                            fullWidth
                            sx={{ flexGrow: 1, padding: '20px 0' }}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Box>
                    <Collapse in={checked}>
                        <Box sx={{ display: 'flex', justifyContent:"space-between"}}>
                            <NotesIcon useEffectCall={useEffectCall} setUseEffectCall={setUseEffectCall} setIsArchived={setIsArchived} setColor={setColor} mode="create"/>
                            <Button onClick={saveNote} size="small" sx={{ color: '#5f6368', textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem' }}>Close</Button>
                        </Box>

                    </Collapse>
                </Paper>
            </Box>
        </div >
    )
}

export default MainNotesIcons
