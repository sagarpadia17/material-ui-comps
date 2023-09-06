import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="row px-5">
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/alertbox">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              AlertBoxes
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/dropdown">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Drop Down
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/appbar">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              App Bars
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/snackbar">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Snack Bars
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/autocomplete">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              AutoComplete
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/bottomnavigation">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Bottom Navigation
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/buttons">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Buttons
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/buttongroups">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Button Groups
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/checkbox">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              CheckBox
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/fab">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Floating Action Buttons
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/radiobuttons">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Radio Buttons
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/rating">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Rating
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/selects">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Selects
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/sliders">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Sliders
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/switches">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
             Switch
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/textfields">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Text Fields
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/transferlists">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Transfer Lists
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/togglebuttons">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Toggle Buttons
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/avatars">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Avatars
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/badges">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Badges
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/chips">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Chips
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/dividers">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Dividers
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/lists">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Lists
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/tables">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Tables
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/tooltips">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Tooltips
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/progress">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Progress
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/skeletons">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Skeletons
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/accordions">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Accordions
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/cards">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Cards
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/datepickers">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              DatePickers
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/breadcrumbs">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              BreadCrumbs
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/drawers">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Drawers
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/pagination">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Pagination
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/speeddials">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              SpeedDials
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/steppers">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Steppers
            </Button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <Link to="/tabs">
            <Button
              variant="contained"
              className="w-100 p-3"
              endIcon={<SendIcon />}
            >
              Tabs
            </Button>
          </Link>
        </div>
        
        
      </div>
    </div>
  );
};

export default Home;