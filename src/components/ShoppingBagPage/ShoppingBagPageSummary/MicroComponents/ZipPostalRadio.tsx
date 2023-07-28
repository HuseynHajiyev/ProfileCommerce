// React imports
import { useState, ChangeEvent } from 'react'

// MUI imports
import { Box, FormControl } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

// Component imports
import { BagAccordionHeaderStyled, SummaryZipCheckboxStyled, SummZipFormLabelStyled } from '../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'

const ZipPostalRadio = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
      };
    return (
        <Box paddingBottom={'5%'}>
            <BagAccordionHeaderStyled>
                Zip/Postal code
            </BagAccordionHeaderStyled>
            <FormControl>
                <SummZipFormLabelStyled
                    control={
                    <SummaryZipCheckboxStyled
                        checked={checked} 
                        onChange={handleChange}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />} 
                    />
                    }
                    label="Brooklyn, NY (198 Smith Street)"  
                />
            </FormControl>
        </Box>
    )
}

export default ZipPostalRadio
