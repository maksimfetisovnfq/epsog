import {Checkbox as MUICheckbox, Typography, Box, type CheckboxProps} from '@mui/material';

type Props = CheckboxProps & {
    label?: React.ReactNode;
    description?: React.ReactNode;
    error?: boolean;
};

export const CheckBox = ({label, description, error, ...props}: Props) => (

    <Box display="flex" alignItems="flex-start">
        <MUICheckbox 
            {...props} 
            sx={{
                '& .MuiSvgIcon-root': {
                    width: 20,
                    height: 20,
                    fill: '#999999',
                    
                },
                
                // Default unchecked state
                color: error ? '#FF3232' : '#CFD5DA',
                
                // Default checked state
                '&.Mui-checked': {
                    color: '#00EB8C',
                    '& .MuiSvgIcon-root': {
                        fill: '#00EB8C',
                        borderColor: '#CCFBE8',
                    },
                },
                
                // Hover unchecked state
                '&:hover': {
                    backgroundColor: 'transparent',
                    '& .MuiSvgIcon-root': {
                        fill: 'black',
                        borderColor: '#CCFBE8',
                    },
                },
                
                // Hover checked state
                '&:hover.Mui-checked': {
                    '& .MuiSvgIcon-root': {
                        fill: '#00EB8C',
                        borderColor: '#CCFBE8',
                    },
                },
                
                // Disabled unchecked state
                '&.Mui-disabled': {
                    '& .MuiSvgIcon-root': {
                        fill: '#FAFAFA',
                        borderColor: '#B7C0C8',
                    },
                },
                
                // Disabled checked state
                '&.Mui-disabled.Mui-checked': {
                    '& .MuiSvgIcon-root': {
                        fill: '#FAFAFA',
                        borderColor: '#B7C0C8',
                    },
                },
                
                '& .MuiTouchRipple-root': {
                    display: 'none',
                },
            }}
        />
        <Box>
            {label && (
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {label}
                    </Typography>
            )}
            {description && (
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{display: 'block', mt: -0.5}}
                >
                    {description}
                </Typography>
            )}
        </Box>
    </Box>

);