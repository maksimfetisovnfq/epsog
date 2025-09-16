import { Button as MUIButton, type ButtonProps, type SxProps } from "@mui/material"

type Props = {} & ButtonProps

const commonSx: SxProps = {
    fontWeight: 700,
    fontFamily: "Arial",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: 0,
    textTransform: "none",
    borderRadius: 0,
    width: "188px",
    height: "48px",
}

export const Button = (props: Props) => {
    const isContained = props.variant === "contained"
    const isOutlined = props.variant === "outlined"

    if (isContained) {
        return (
            <MUIButton
                {...props}
                sx={{
                    ...commonSx,

                    color: props.disabled ? "#6F8190 !important" : "#000",
                    backgroundColor: props.disabled ? "#B7C0C8 !important" : "#00EB8C",
                    borderColor: "#00EB8C",

                    "&:hover": {
                        backgroundColor: props.disabled ? "#B7C0C8" : "#19FF8C",
                        color: props.disabled ? "#6F8190" : "#000",
                        borderColor: "#19FF8C",
                        ...commonSx,
                    },
                    ...(props.disabled && {
                        pointerEvents: "none",
                    }),

                    "& .MuiTouchRipple-root": {
                        display: "none",
                    },
                }}
            >
                {props.children}
            </MUIButton>
        )
    } else if (isOutlined) {
        return (
            <MUIButton
                {...props}
                sx={{
                    color: props.disabled ? "#B7C0C8" : "#000",
                    border: "1px solid #B7C0C8",
                    ...commonSx,
                    "&:hover": {
                        color: props.disabled ? "#B7C0C8" : "#000",
                        border: props.disabled ? "1px solid #B7C0C8" : "1px solid #000",
                        ...commonSx,
                    },
                    ...(props.disabled && {
                        pointerEvents: "none",
                    }),

                    "& .MuiTouchRipple-root": {
                        display: "none",
                    },
                }}
            >
                {props.children}
            </MUIButton>
        )
    }
}