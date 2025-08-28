import type {PropsWithChildren} from "react";
import {Box} from "@mui/material";
import { useLocation } from '@tanstack/react-router';

type Props = PropsWithChildren

export const Layout = ({children}: Props) => {
    const location = useLocation();
    const isHome = location.pathname.replace(/\/+$/, '') === '';
    return (
        <Box sx={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
            {isHome && (
                <Box
                    sx={{
                        position: 'fixed',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        backgroundImage: "url('/bg.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            )}
            <Box sx={{
                margin: '0 auto',
                maxWidth: '816px',
                my: '80px',
                position: 'relative',
                zIndex: 1,
            }}>
                {children}
            </Box>
        </Box>
    )
}