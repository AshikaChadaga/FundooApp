import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import UserService from "../../service/UserService";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import './Collaborators.scss'
import DialogContentText from '@mui/material/DialogContentText';
import EmailGenerator from "../emailgenerator/EmailGenerator";
const userService = new UserService();


export default function Collaborators() {
    const [open, setOpen] = React.useState(false);
    const [collaborators, setCollaborators] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openPopper, setOpenPopper] = React.useState(false);
    const [responseList, setResponseList] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        // setCollabList([]);
        setOpen(false);
        setCollaborators([]);
    };
    const handleClick = () => (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPopper(true);

    };

    const handlePopperClose = (event) => {
        setOpenPopper(false);
        setResponseList([]);
    };

    const handleMenuItemClick = (event, index) => {
        setCollaborators([...collaborators, responseList[index]]);
        console.log("Option: ", responseList[index]);
        console.log("collab List After: ", collaborators);
    };

    const search = (event) => {
        // let searchKey = event.target.value;
        if (event.target.value !== "") {
            let data = {
                "searchWord": event.target.value
            };
            let config = {
                headers: {
                    'Authorization': localStorage.getItem("id"),
                }
            };
            userService.getResult("user/searchUserList", data, config)
                .then((res) => {
                    setResponseList(res.data.data.details);
                    console.log("Response List", responseList);
                })
                .catch(error => {
                    console.error('Error encountered While Retrieving Search list!', error);
                });
        }

    }
    return (
        <span>
            <IconButton size="medium">
                <PersonAddAltOutlinedIcon
                    onClick={handleClickOpen}
                    style={{ color: "#5f6368" }}
                />
            </IconButton>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    Collaborators
                    <Divider />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div class="login-email" >
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>{localStorage.getItem("firstName").charAt(0)}</Avatar>
                            <div >
                                <p class="name">{localStorage.getItem("firstName")} {localStorage.getItem("lastName")} (Owner)</p>
                                <p class="email">{localStorage.getItem("email")}</p>
                            </div>
                        </div>

                        <div class="collab" >
                            {collaborators.map((collab) => (
                                <div class="login-email">
                                    <Avatar sx={{ bgcolor: deepPurple[500] }}>{collab.firstName.charAt(0)}</Avatar>
                                    <div>
                                        <p class="name">{collab.firstName} {collab.lastName}</p>
                                        <p class="email">{collab.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </DialogContentText>
                    <div
                        class="collab-email"
                        style={{ display: "grid", gridTemplateColumns: "1fr 9fr" }}
                    >
                        <div class="account-cirlce">
                            <h5>
                                <IconButton size="medium">
                                    <PersonAddAltOutlinedIcon
                                        style={{ color: "#5f6368" }}
                                    />
                                </IconButton>
                            </h5>
                        </div>

                        <div class="email">
                            <EmailGenerator setCollabList={setCollaborators} collabList={collaborators} />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "lightgrey" }}>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}
