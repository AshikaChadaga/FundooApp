import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import IconButton from "@mui/material/IconButton";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UserService from '../../service/UserService';
const userService = new UserService();

const options = [
  "Delete note",
  "Add label",
  "Add drawing",
  "Make a copy",
  "Show checkboxes",
  "Copy to Google Docs"
];

export default function MenuDropdown(props) {
  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleMenuItemClick = (event, index) => {
    if(index==0){
      deleteNote();
    }
  };


  const deleteNote = () => {
    let data = {
      noteIdList: [props.note.id],
      isDeleted: true
    }
    let config = {
      headers: {
        'Authorization': localStorage.getItem("id"),
      }
    };
    userService.deleteNote('/notes/trashNotes', data, config)
      .then(() => {
        console.log("Note deleted Succesfully");
        props.handleClose();
        props.displayNote();
        console.log("Display notes after delete called");
      })
      .catch(error => {
        console.error('Error encountered While Deleting Note !', error);
      });
  }

  return (
    <span>
      <IconButton onClick={handleToggle} ref={anchorRef}>
        <MoreVertOutlinedIcon sx={{ margin: "5px" }} />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} transition style={{ backgroundColor: "#f7f7f7", zIndex: "2000" }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement = "bottom-start"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem onClick={(event) => handleMenuItemClick(event, index)} key={index}>{option}</MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </span>
  );
}