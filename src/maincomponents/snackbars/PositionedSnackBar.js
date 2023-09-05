import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        variant="contained"
        className="w-100 my-2"
        onClick={handleClick({ vertical: "top", horizontal: "center" })}
      >
        Top-Center
      </Button>

      <Button
        variant="contained"
        className="w-100 my-2"
        onClick={handleClick({ vertical: "top", horizontal: "left" })}
      >
        Top-Left
      </Button>

      <Button
        variant="contained"
        className="w-100 my-2"
        onClick={handleClick({ vertical: "top", horizontal: "right" })}
      >
        Top-Right
      </Button>

      <Button
        variant="contained"
        className="w-100 my-2"
        onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
      >
        Bottom-Left
      </Button>

      <Button
        variant="contained"
        className="w-100 my-2"
        onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
      >
        Bottom-Right
      </Button>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          className="w-100 my-2"
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          Bottom-Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: "100%" }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Box>
  );
}
