import React from 'react';
import { Button } from "../../../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NavigationButtons: React.FC = () => {
    return (
        <div style={{
            marginTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '768px',
            height: '96px'
        }}>
            <Button type="submit" startIcon={<ArrowBackIcon/>} style={{width: '261px'}}>
                Koreguoti duomenys
            </Button>
            <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                Susisiekti
            </Button>
        </div>
    );
};
