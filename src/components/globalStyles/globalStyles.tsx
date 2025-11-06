import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
    <MuiGlobalStyles
        styles={{
            'body, html': {
                fontFamily: '"Nunito Sans", sans-serif !important',
            },
            '*': {
                fontFamily: '"Nunito Sans", sans-serif !important',
            },
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