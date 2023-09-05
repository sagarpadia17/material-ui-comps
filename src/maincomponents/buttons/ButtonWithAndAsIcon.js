import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from '@mui/material/IconButton';
export default function ButtonWithAndAsIcon() {
  return (
    <div className="row">
      <div className="col-md-3">
        <Button variant="outlined" className="w-100" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
      <div className="col-md-3">
        <Button variant="contained" className="w-100" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div className="col-md-3">
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
      </div>
      <div className="col-md-3">
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    </div>
  );
}
