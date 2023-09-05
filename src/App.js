
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AlertBox from './components/AlertBox';
import Home from './components/Home';
import DropDown from './components/DropDown';
import AppBar from './components/AppBar';
import SnackBar from './components/SnackBar';
import AutoComplete from './components/AutoComplete';
import BottomNavigation from './components/BottomNavigation';
import Button from './components/Button';
import ButtonGroups from './components/ButtonGroups';
import CheckBox from './components/CheckBox';
import FloatingActionButton from './components/FloatingActionButton';
import RadioButton from './components/RadioButton';
import Rating from './components/Rating';
import Select from './components/Select';
import Slider from './components/Slider';
import Switch from './components/Switch';
import TextField from './components/TextField';
import TransferList from './components/TransferList';
import ToggleButton from './components/ToggleButton';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="text-center">
    <h1 className="p-4"> Material 3 UI Components</h1>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/alertbox' element={<AlertBox />}/>
        <Route exact path='/dropdown' element={<DropDown />}/>
        <Route exact path='/appbar' element={<AppBar />}/>
        <Route exact path='/snackbar' element={<SnackBar />}/>
        <Route exact path='/autocomplete' element={<AutoComplete />}/>
        <Route exact path='/bottomnavigation' element={<BottomNavigation />}/>
        <Route exact path='/buttons' element={<Button/>}/>
        <Route exact path='/buttongroups' element={<ButtonGroups/>}/>
        <Route exact path='/checkbox' element={<CheckBox/>}/>
        <Route exact path='/fab' element={<FloatingActionButton/>}/>
        <Route exact path='/radiobuttons' element={<RadioButton/>}/>
        <Route exact path='/rating' element={<Rating/>}/>
        <Route exact path='/selects' element={<Select/>}/>
        <Route exact path='/sliders' element={<Slider/>}/>
        <Route exact path='/switches' element={<Switch/>}/>
        <Route exact path='/textfields' element={<TextField/>}/>
        <Route exact path='/transferlists' element={<TransferList/>}/>
        <Route exact path='/togglebuttons' element={<ToggleButton/>}/>
        <Route exact path='/avatars' element={<Avatar/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
