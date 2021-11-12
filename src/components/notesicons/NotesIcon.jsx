import React, { Component } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IconButton from "@mui/material/IconButton";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PalleteIcon from '../palleteicon/PalleteIcon';
import MenuDropdown from '../menudropdown/MenuDropdown';

export default function NotesIcon() {
    return (
        <div>
            <div className="icons">
                <IconButton size="small" >
                    <AddAlertOutlinedIcon style={{ color: "#5f6368" }} />
                </IconButton>
                <IconButton size="small">
                    <PersonAddAlt1OutlinedIcon style={{ color: "#5f6368" }} />
                </IconButton>
                <IconButton size="small">
                    <PalleteIcon style={{ color: "#5f6368" }} />
                </IconButton>
                <IconButton size="small">
                    <ImageOutlinedIcon style={{ color: "#5f6368" }} />
                </IconButton>
                <IconButton size="small">
                    <ArchiveOutlinedIcon style={{ color: "#5f6368" }} />
                </IconButton>
                <IconButton size="small">
                    <MenuDropdown style={{ color: "#5f6368" }} />
                </IconButton>
            </div>
        </div>
    )
}