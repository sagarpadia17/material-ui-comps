import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlertBox from "./components/AlertBox";
import Home from "./components/Home";
import DropDown from "./components/DropDown";
import AppBar from "./components/AppBar";
import SnackBar from "./components/SnackBar";
import AutoComplete from "./components/AutoComplete";
import BottomNavigation from "./components/BottomNavigation";
import Button from "./components/Button";
import ButtonGroups from "./components/ButtonGroups";
import CheckBox from "./components/CheckBox";
import FloatingActionButton from "./components/FloatingActionButton";
import RadioButton from "./components/RadioButton";
import Rating from "./components/Rating";
import Select from "./components/Select";
import Slider from "./components/Slider";
import Switchs from "./components/Switchs";
import TextField from "./components/TextField";
import TransferList from "./components/TransferList";
import ToggleButton from "./components/ToggleButton";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import Chip from "./components/Chip";
import Divider from "./components/Divider";
import List from "./components/List";
import Table from "./components/Table";
import Tooltip from "./components/Tooltip";
import Progress from "./components/Progress";
import Skeleton from "./components/Skeleton";
import Accordion from "./components/Accordion";
import Card from "./components/Card";
import DatePicker from "./components/DatePicker";
import Breadcrumb from "./components/Breadcrumb";
import Drawer from "./components/Drawer";
import Pagination from "./components/Pagination";
import SpeedDial from "./components/SpeedDial";
import Stepper from "./components/Stepper";
import Tabs from "./components/Tabs";
import Modal from "./components/Modal";
import TimePicker from "./components/TimePicker";
import Timeline from "./components/Timeline";
import ImageList from "./components/ImageList";
import Popover from "./components/Popover";
import Textarea from "./components/Textarea";
import Transitions from "./components/Transitions";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
function App() {
  const [theme, settheme] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: theme ? "light" : "dark",
    },
  });
  const handleChange = (event) => {
    settheme(event.target.checked);
  };
  return (
    <div className="text-center">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="row align-items-center px-4">
          <div className="col-md-8 text-start">
            <h1 className="p-4"> Material 3 UI Components</h1>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end p-4">
            <h1>Dark Mode</h1>
            <Switch checked={theme} color="success" onChange={handleChange} />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/alertbox" element={<AlertBox />} />
          <Route exact path="/dropdown" element={<DropDown />} />
          <Route exact path="/appbar" element={<AppBar />} />
          <Route exact path="/snackbar" element={<SnackBar />} />
          <Route exact path="/autocomplete" element={<AutoComplete />} />
          <Route
            exact
            path="/bottomnavigation"
            element={<BottomNavigation />}
          />
          <Route exact path="/buttons" element={<Button />} />
          <Route exact path="/buttongroups" element={<ButtonGroups />} />
          <Route exact path="/checkbox" element={<CheckBox />} />
          <Route exact path="/fab" element={<FloatingActionButton />} />
          <Route exact path="/radiobuttons" element={<RadioButton />} />
          <Route exact path="/rating" element={<Rating />} />
          <Route exact path="/selects" element={<Select />} />
          <Route exact path="/sliders" element={<Slider />} />
          <Route exact path="/switches" element={<Switchs />} />
          <Route exact path="/textfields" element={<TextField />} />
          <Route exact path="/transferlists" element={<TransferList />} />
          <Route exact path="/togglebuttons" element={<ToggleButton />} />
          <Route exact path="/avatars" element={<Avatar />} />
          <Route exact path="/badges" element={<Badge />} />
          <Route exact path="/chips" element={<Chip />} />
          <Route exact path="/dividers" element={<Divider />} />
          <Route exact path="/lists" element={<List />} />
          <Route exact path="/tables" element={<Table />} />
          <Route exact path="/tooltips" element={<Tooltip />} />
          <Route exact path="/progress" element={<Progress />} />
          <Route exact path="/skeletons" element={<Skeleton />} />
          <Route exact path="/accordions" element={<Accordion />} />
          <Route exact path="/cards" element={<Card />} />
          <Route exact path="/datepickers" element={<DatePicker />} />
          <Route exact path="/breadcrumbs" element={<Breadcrumb />} />
          <Route exact path="/drawers" element={<Drawer />} />
          <Route exact path="/pagination" element={<Pagination />} />
          <Route exact path="/speeddials" element={<SpeedDial />} />
          <Route exact path="/steppers" element={<Stepper />} />
          <Route exact path="/tabs" element={<Tabs />} />
          <Route exact path="/modals" element={<Modal />} />
          <Route exact path="/timepickers" element={<TimePicker />} />
          <Route exact path="/timelines" element={<Timeline />} />
          <Route exact path="/imagelists" element={<ImageList />} />
          <Route exact path="/popovers" element={<Popover />} />
          <Route exact path="/textarea" element={<Textarea />} />
          <Route exact path="/transitions" element={<Transitions />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
