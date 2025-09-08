import {Box, Typography} from "@mui/material";
import {type ErrorComponentProps, useLocation, useNavigate} from "@tanstack/react-router";
import {Button} from "../ui/button";

export const ErrorPage = ({error}: ErrorComponentProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const tryAgain = () => {
        console.error(error);
        
        navigate({
            to: '/',
            state: location.state
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            flexDirection: 'column',
            gap: 10,
            py: 20
        }}>
            <Typography>There was an error during request</Typography>

            <Button variant="contained"  onClick={tryAgain}>Try again</Button>
        </Box>
    )
}