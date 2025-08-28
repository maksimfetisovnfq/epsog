import React from 'react';
import { Button } from "../../../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NavigationButtons: React.FC<{
    onBackward: () => void;
    onForward: () => void;
}> = ({ onBackward, onForward }) => {
    return (
        <div style={{
            marginTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '768px',
            height: '96px'
        }}>
            <Button variant="outlined" onClick={onBackward} startIcon={<ArrowBackIcon/>} style={{width: '261px'}}>
                Koreguoti duomenys
            </Button>
            <Button variant="contained" onClick={onForward} endIcon={<ArrowForwardIcon/>}>
                Susisiekti
            </Button>
        </div>
    );
};
