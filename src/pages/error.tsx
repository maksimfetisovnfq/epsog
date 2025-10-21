import { Container, Typography } from "@mui/material"
import { type ErrorComponentProps, useLocation, useNavigate } from "@tanstack/react-router"
import { Button } from "../ui/button"
import { ApiValidationError } from "@/types"

export const ErrorPage = ({ error }: ErrorComponentProps) => {
    const navigate = useNavigate()
    const location = useLocation()

    console.log(error)

    const tryAgain = () => {
        console.error(error)

        navigate({
            to: "/",
            state: location.state,
        })
    }

    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "90vh",
                flexDirection: "column",
                gap: 10,
                py: 20,
                px: "20px !important",
            }}
        >
            {error instanceof ApiValidationError ? (
                <Typography>{error.message}</Typography>
            ) : (
                <Typography>Nepavyko įkelti duomenų</Typography>
            )}

            <Button variant="contained" onClick={tryAgain}>
                Bandyti dar kartą
            </Button>
        </Container>
    )
}
