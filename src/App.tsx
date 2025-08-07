import {CssBaseline} from "@mui/material";
import {Button} from "./ui/button";
import {CheckBox} from "./ui/checkBox/checkBox.tsx";
import DataSaverOffRoundedIcon from '@mui/icons-material/DataSaverOffRounded';


function App() {

  return (
    <>
        <Button variant="outlined" startIcon={<DataSaverOffRoundedIcon/>} endIcon={<DataSaverOffRoundedIcon/>} >Button</Button>
        <Button variant="contained" startIcon={<DataSaverOffRoundedIcon/>} endIcon={<DataSaverOffRoundedIcon/>}>Button</Button>
        <CheckBox label="CheckBox label" description="Description" />
        <CssBaseline/>
    </>
  )
}

export default App
