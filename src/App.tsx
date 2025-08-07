import {CssBaseline} from "@mui/material";
import {Button} from "./ui/button";
import {CheckBox} from "./ui/checkBox/checkBox.tsx";
import { BasicTab } from './ui/tabs/tabUI/tabs.tsx';
import DataSaverOffRoundedIcon from '@mui/icons-material/DataSaverOffRounded';


function App() {

  return (
    <>
        <Button variant="outlined" startIcon={<DataSaverOffRoundedIcon/>} endIcon={<DataSaverOffRoundedIcon/>} >Button</Button>
        <Button variant="contained" startIcon={<DataSaverOffRoundedIcon/>} endIcon={<DataSaverOffRoundedIcon/>}>Button</Button>
        <CheckBox label="CheckBox label" description="Description" />
        <BasicTab/>
        <CssBaseline/>
    </>
  )
}

export default App
