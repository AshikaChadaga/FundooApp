import React, { useEffect, useState } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconButton from "@mui/material/IconButton";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UserService from '../../service/UserService';
import DisplayNotes from '../displaynotes/DisplayNotes';
import { useHistory } from 'react-router-dom';

const userService = new UserService();

function MainNotesIcons() {
    const history = useHistory();
    const [checked, setChecked] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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
        };
        let config = {
            headers: {
                'Authorization': localStorage.getItem("id"),
            }
        };
        userService.addNotes("/notes/addNotes", data, config)
        .then(() => {
            console.log("Notes Added!");
            window.location.reload(true);
        })
        .catch(error => {
            console.error('Error encountered!', error);
          });
    }

    const bottomIcons = (
        <Box sx={{ display: 'flex' }}>
            <IconButton><AddAlertOutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <IconButton><PersonAddAlt1OutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <IconButton><ColorLensOutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <IconButton><ImageOutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <IconButton><ArchiveOutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <IconButton><MoreVertOutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <IconButton><UndoOutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <IconButton><RedoOutlinedIcon sx={{ margin: '10px' }} /></IconButton>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Button onClick={saveNote} size="small" sx={{ color: '#5f6368', textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem' }}>Close</Button>
        </Box>
    );
    const notestitle = (
        <Box sx={{ display: 'flex' }}>
            <InputBase
                name="title"
                placeholder="Title"
                sx={{ flexGrow: '1' }}
                onChange={(e) => setTitle(e.target.value)}
            />
            <IconButton><PushPinOutlinedIcon /></IconButton>
        </Box>
    );
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', marginLeft: '25%', justifyContent: 'space-between' }}>
                <Paper sx={{ padding: '5px 20px 5px 20px', border: '1px solid lightgray', borderRadius: '10px', }}>
                    <Collapse in={checked}>{notestitle}</Collapse>
                    <Box>
                        <InputBase
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
                    <Collapse in={checked}>{bottomIcons}</Collapse>
                </Paper>
            </Box>
        </div>
    )
}

export default MainNotesIcons
