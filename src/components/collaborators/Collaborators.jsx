import * as React from "react";
import UserService from "../../service/UserService";
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


export default function Collaborators(props) {
    const [open, setOpen] = React.useState(false);
    const [collaboratorList, setCollaboratorList] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setCollaboratorList([]);
    };

    const handleSave = (data) => {
        if (props.mode == 'update') {

            let config = {
                headers: {
                    'Authorization': localStorage.getItem("id"),
                }
            }
            userService.addCollaborator(`/notes/${props.note.id}/AddCollaboratorsNotes`, data, config)
                .then((res) => {
                    console.log("Registered User Successfully");
                    props.displayNote();
                })
                .catch(error => {
                    console.error('Error encountered While Adding Collaborator !', error);
                });
        }

        
        else{
            props.handleAddCollaborators(data);
            console.log("Called handle add collab");
        }
    }
    return (
        <span>
            <IconButton size="medium" onClick={handleClickOpen}>
                <PersonAddAltOutlinedIcon

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
                        <div className="login-email" >
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>{localStorage.getItem("firstName").charAt(0)}</Avatar>
                            <div >
                                <h4 className="name">{localStorage.getItem("firstName")} {localStorage.getItem("lastName")} (Owner)</h4>
                                <h4 className="email">{localStorage.getItem("email")}</h4>
                            </div>
                        </div>

                        <div className="collab" >
                            {
                                props.note ?
                                    props.note.collaborators.map((collab) => (
                                        <div key={collab.email} className="login-email">
                                            <Avatar sx={{ bgcolor: deepPurple[500] }}>{collab.firstName.charAt(0)}</Avatar>
                                            <div>
                                                <h4 className="name">{collab.firstName} {collab.lastName}</h4>
                                                <h4 className="email">{collab.email}</h4>
                                            </div>
                                        </div>
                                    ))
                                    : collaboratorList.map((collab) => (
                                        <div key={collab.email} className="login-email">
                                            <Avatar sx={{ bgcolor: deepPurple[500] }}>{collab.firstName.charAt(0)}</Avatar>
                                            <div>
                                                <h4 className="name">{collab.firstName} {collab.lastName}</h4>
                                                <h4 className="email">{collab.email}</h4>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>

                    </DialogContentText>
                    <div
                        className="collab-email"
                        style={{ display: "grid", gridTemplateColumns: "1fr 9fr" }}
                    >
                        <div className="account-cirlce">
                            <h5>
                                <IconButton size="medium">
                                    <PersonAddAltOutlinedIcon
                                        style={{ color: "#5f6368" }}
                                    />
                                </IconButton>
                            </h5>
                        </div>

                        <div className="email">
                            <EmailGenerator collaboratorList={collaboratorList} setCollaboratorList={setCollaboratorList} handleSave={handleSave} />
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
