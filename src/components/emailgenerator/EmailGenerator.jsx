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
const userService = new UserService();

export default function EmailGenerator(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [resList, setResList] = React.useState([]);
    
    const handleClick = () => (event) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setOpen(false);
        setResList([]);
    };

    const handleMenuItemClick = (event, index) => {
        props.setCollaboratorList([...props.collaboratorList, resList[index]])
        props.handleSave(resList[index]);
    };

    const search = (event) => {
        let searchKey = event.target.value;
        if (searchKey !== "") {
            let data = {
                "searchWord": searchKey
            };
            let config = {
                headers: {
                    'Authorization': localStorage.getItem("id"),
                }
            };
            userService.getResult("user/searchUserList/", data, config)
                .then((res) => {
                    setResList(res.data.data.details);
                    console.log(res.data.data.details);
                    console.log("Retrieved Search List")
                })
                .catch(error => {
                    console.error('Error encountered While Retrieving Search list!', error);
                });
        }

    }

    return (
        <Box sx={{ width: 500 }}>
            <Popper
                open={open}
                anchorEl={anchorEl}
                placement="bottom-start"
                transition
                style={{ zIndex: "2000" }}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {resList.map((option, index) => (
                                        <MenuItem
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                            key={option.userId}
                                            >{option.firstName} {option.lastName} &lt;{option.email}&gt;
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <TextField
                autoFocus
                style={{ color: "black", marginTop: "1vw" }}
                id="standard-basic"
                variant="standard"
                onClick={handleClick()}
                onChange={(event) => search(event)}
            ></TextField>
        </Box>
    );
}
