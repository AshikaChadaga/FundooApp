import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import './Logout.scss';
import { useHistory } from "react-router";


export default function Logout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogout = () => {
    localStorage.clear();
    console.log("Local Storage Cleared");
    history.push("/signin");
  }

  return (

    <div style={{ justifyItems: "center" }}>
      <Avatar onClick={handlePopoverClick} sx={{ bgcolor: deepPurple[500] }}>
        {localStorage.getItem("firstName").charAt(0)}
      </Avatar>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div className="logout">
          <Avatar
            sx={{
              width: 95,
              height: 95,
              bgcolor: deepPurple[500],
              fontSize: "50px",
            }}
          >
            {localStorage.getItem("firstName").charAt(0)}
          </Avatar>
          <Typography sx={{ p: 2, textAlign: "center" }}>
            {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}<br />
            {localStorage.getItem('email')}
          </Typography>
          <Button
            onClick={handleLogout}
            variant="outlined"
            style={{
              borderRadius: 25,
              border: "1px solid lightgrey",
              color: "black",
              textTransform: "none"
            }}
          >
            Logout
          </Button>
        </div>
      </Popover>
    </div>
  );
}

