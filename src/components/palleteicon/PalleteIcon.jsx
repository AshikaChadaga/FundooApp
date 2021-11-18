import * as React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import UserService from '../../service/UserService';
const userService = new UserService();

export default function PalleteIcon(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const updateColor = (color) => {
        props.setColor(color);
        if (props.mode == 'update') {
            let data = {
                noteIdList: [props.note.id],
                color: color
            };

            let config = {
                headers: {
                    'Authorization': localStorage.getItem("id"),
                }
            };
            userService.updateNotes("/notes/changesColorNotes", data, config)
                .then(() => {
                    console.log("Color Changed Succesfully");
                    props.displayNote();
                    console.log("Display updated color of notes called");
                })
                .catch(error => {
                    console.error('Error encountered while Updating Color!', error);
                });
        }
    }

    const colorList = ['#fff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed'];

    return (
        <span>
            <Popper open={open} anchorEl={anchorEl} placement={placement} style={{ backgroundColor: "gray", zIndex: "2000" }} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                        <Paper sx={{ width: '100%', zIndex: 1500 }}>
                            <Box padding="10px" display="grid" gridTemplateColumns="repeat(4,1fr)">
                                {colorList.map((color) => (
                                    <CircleIcon
                                        onClick={() => updateColor(color)}
                                        style={{
                                            border: "1px solid",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                            color: color,
                                            cursor: "pointer"
                                        }} />
                                ))}
                            </Box>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <IconButton size="small" onClick={handleClick("top-start")}>
                <ColorLensOutlinedIcon style={{ color: "#5f6368" }} />
            </IconButton>
        </span >
    );
}
