import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
    <MuiGlobalStyles
        styles={{
            '.MuiContainer-root': {
                padding: '0px !important',
            },
            '.MuiPaper-root.MuiAccordion-root::before': {
                backgroundColor: 'transparent',
            },
            '.MuiAccordionDetails-root': {
                padding: '0 !important',
            },
            '.MuiTabs-list': {
                marginBottom: '48px',
            },
            '.css-nvechd-MuiStack-root>:not(style)~:not(style)': {
                marginTop: '0 !important',
            },
        }}
    />
);