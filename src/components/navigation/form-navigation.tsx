import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Divider } from "@mui/material"
import {Button} from "../../ui/button";

type FormNavigationProps = {
    handleBackward: () => void;
    backButtonTitle?: string;
    nextButtonTitle?: string;
}

export const FormNavigation = ({handleBackward, backButtonTitle = "Atgal", nextButtonTitle = "Toliau"}: FormNavigationProps) => {
    return (
        <Box sx={{ fontFamily: "Arial" }}>
            <Divider variant="fullWidth" sx={{marginTop: '64px'}}/>

            <Box sx={{marginTop: '24px', display: 'flex', gap: 16, justifyContent: 'space-between'}}>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon/>}
                    onClick={handleBackward}
                    sx={{ whiteSpace: 'nowrap' }}
                >
                    {backButtonTitle}
                </Button>
                <Button 
                    variant="contained" 
                    type="submit" 
                    endIcon={<ArrowForwardIcon/>} 
                    sx={{ whiteSpace: 'nowrap' }}
                >
                    {nextButtonTitle}
                </Button>
                
            </Box>
        </Box>
    )
}