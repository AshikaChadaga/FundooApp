import * as React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
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
                noteIdList: [props.noteId],
                color: color
            }

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
                    console.error('Error encountered!', error);
                });
        }
    }

    const colorList = ['#fff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed'];

    return (
        <span>
            <Popper open={open} anchorEl={anchorEl} placement={placement} style={{ backgroundColor: "#f7f7f7", zIndex: "2000" }} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                padding:"10px"
                            }}
                        >
                            <CircleIcon
                                onClick={() => updateColor('#fff')}
                                style={{
                                    border: "1px solid #f3f3f3",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    marginBottom:"5px",
                                    color: "#fff"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#f28b82')}
                                style={{
                                    border: "1px solid #f28b82",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#f28b82"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#fbbc04')}
                                style={{
                                    border: "1px solid #fbbc04",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#fbbc04"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#fff475')}
                                style={{
                                    border: "1px solid #fff475",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#fff475"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#ccff90')}
                                style={{
                                    border: "1px solid #ccff90",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#ccff90"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#a7ffeb')}
                                style={{
                                    border: "1px solid #a7ffeb",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#a7ffeb"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#cbf0f8')}
                                style={{
                                    border: "1px solid #cbf0f8",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#cbf0f8"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#aecbfa')}
                                style={{
                                    border: "1px solid #aecbfa",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#aecbfa"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#d7aefb')}
                                style={{
                                    border: "1px solid #d7aefb",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#d7aefb"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#fdcfe8')}
                                style={{
                                    border: "1px solid #fdcfe8",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#fdcfe8"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#e6c9a8')}
                                style={{
                                    border: "1px solid #e6c9a8",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#e6c9a8"
                                }}
                            />
                            <CircleIcon
                                onClick={() => updateColor('#e8eaed')}
                                style={{
                                    border: "1px solid #e8eaed",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#e8eaed"
                                }} 
                            />
                            {/* {colorList.map((color) => {
                                <CircleIcon
                                    onClick={() => updateColor(color)}
                                    style={{
                                        borderRadius: "50%",
                                        marginRight: "5px",
                                        color: color
                                    }}
                                />
                            })} */}

                        </div>
                    </Fade>
                )}
            </Popper>
            <IconButton size="small" onClick={handleClick("top-start")}>
                <ColorLensOutlinedIcon style={{ color: "#5f6368" }} />
            </IconButton>
        </span>
    );
}
