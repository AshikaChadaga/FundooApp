import * as React from "react";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

export default function PalleteIcon() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <span>
            <Popper open={open} anchorEl={anchorEl} placement={placement} style={{ backgroundColor: "#f7f7f7", zIndex: "2000" }} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                        <Typography
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)"
                            }}
                            sx={{ p: 2 }}
                        >
                            <CircleIcon
                                style={{
                                    border: "1px solid #f3f3f3",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#fff"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #f28b82",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#f28b82"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #fbbc04",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#fbbc04"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #fff475",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#fff475"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #ccff90",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#ccff90"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #a7ffeb",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#a7ffeb"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #cbf0f8",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#cbf0f8"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #aecbfa",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#aecbfa"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid ##d7aefb",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#d7aefb"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #fdcfe8",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#fdcfe8"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #e6c9a8",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#e6c9a8"
                                }}
                            />
                            <CircleIcon
                                style={{
                                    border: "1px solid #e8eaed",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    color: "#e8eaed"
                                }}
                            />
                        </Typography>
                    </Fade>
                )}
            </Popper>
            <IconButton size="small" onClick={handleClick("top-start")}>
                <ColorLensOutlinedIcon style={{ color: "#5f6368" }} />
            </IconButton>
        </span>
    );
}
