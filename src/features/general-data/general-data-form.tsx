import {Form, FormInput} from "../../components/form";
import {type GeneralDataSchema, generalDataSchema} from "./general-data-schema";
import {useNavigate} from "@tanstack/react-router";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import * as React from "react";

export const GeneralDataForm = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = (data: GeneralDataSchema) => {
        navigate({
            to: "/technical-parameters",
            state: {
                generalData: data,
            },
        })
    }

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: {'aria-label': item},
    });

    const radioStyles = {
        '&.Mui-checked': {
            color: '#00EB8C',
        },
        '&:not(.Mui-checked)': {
            color: '#00EB8C',
        },
    };

    return (
        <Form onSubmit={handleSubmit} validationSchema={generalDataSchema} defaultValues={{
            network: "",
        }}>
            <FormInput name="network"/>

            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="P2H" control={<Radio{...controlProps('a')} sx={radioStyles}/>} label="P2H"/>
                <FormControlLabel value="BEKS" control={<Radio {...controlProps('b')} sx={radioStyles}/>} label="BEKS"/>
                <FormControlLabel value="P2G" control={<Radio {...controlProps('c')} sx={radioStyles}/>} label="P2G"/>
                <FormControlLabel value="DSR" control={<Radio {...controlProps('d')} sx={radioStyles}/>} label="DSR"/>
            </RadioGroup>

            <button type="submit">Forward</button>
            GENERAL DATA FORM
        </Form>
    )
}