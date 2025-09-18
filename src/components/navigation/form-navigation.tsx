import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Divider} from "@mui/material";
import {Button} from "../../ui/button";

type FormNavigationProps = {
    handleBackward: () => void;
}

export const FormNavigation = ({handleBackward}: FormNavigationProps) => {
    return (
        <div style={{ fontFamily: "Arial" }}>
            <Divider variant="fullWidth" sx={{marginTop: '64px'}}/>

            <div style={{marginTop: '24px', display: 'flex',  flexWrap: "wrap", gap: 16, justifyContent: 'space-between'}}>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon/>}
                    onClick={handleBackward}
                >
                    Atgal
                </Button>
                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                    Toliau
                </Button>
            </div>
        </div>
    )
}