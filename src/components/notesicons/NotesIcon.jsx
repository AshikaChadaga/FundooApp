import React, { Component } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IconButton from "@mui/material/IconButton";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PalleteIcon from '../palleteicon/PalleteIcon';
import MenuDropdown from '../menudropdown/MenuDropdown';
import UserService from '../../service/UserService';
import Collaborators from '../collaborators/Collaborators';
const userService = new UserService();

export default function NotesIcon(props) {

    const updateArchive = () => {
        if(props.mode == "create"){
            props.setIsArchived(true);
            console.log("Created Archived Notes");
            props.setUseEffectCall(!props.useEffectcall);            
        }
        else{
            let data={
                noteIdList: [props.noteId],
                isArchived: true
            };
            let config = {
                headers: {
                    'Authorization': localStorage.getItem("id"),
                }
            };
            userService.archive("/notes/archiveNotes", data, config)
                .then(()=>{
                    console.log("Successfully Archived Notes");
                    props.displayNote();  
                    props.handleClose();
                })
                .catch(error => {
                    console.error('Error encountered while Archiving!', error);
                });           
        }
    }

    return (
        <div>
            <div className="icons">
                <IconButton size="small" >
                    <AddAlertOutlinedIcon style={{ color: "#5f6368" }} />
                </IconButton>
                <Collaborators/>
                <IconButton size="small">
                    {props.mode == "update" ? <PalleteIcon displayNote={props.displayNote} noteId={props.noteId} setColor={props.setColor} mode="update" /> : <PalleteIcon displayNote={props.displayNote} setColor={props.setColor} mode="create" />}
                </IconButton>
                <IconButton size="small">
                    <ImageOutlinedIcon style={{ color: "#5f6368" }} />
                </IconButton>
                <IconButton size="small" onClick={() => updateArchive()}>
                    <ArchiveOutlinedIcon style={{ color: "#5f6368" }}/>
                </IconButton>
                <IconButton size="small">
                    <MenuDropdown handleClose={props.handleClose} mode="update" setIsDeleted={props.setIsDeleted} displayNote={props.displayNote} noteId={props.noteId} style={{ color: "#5f6368" }} />
                </IconButton>
            </div>
        </div>
    )
}