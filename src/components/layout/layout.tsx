import type {PropsWithChildren} from "react";
import {Container} from "@mui/material";

type Props = PropsWithChildren 

export const Layout = ({children}: Props) => {
    return (
        <Container sx={{ 
            maxWidth: '816px',
            my: '80px',
        }}>
            {children}
        </Container>
    )
}