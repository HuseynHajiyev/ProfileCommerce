import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { UserInterface } from '../../../models/UserInterface'
import { ChangeEvent, useEffect, useState } from 'react';
import { capitalizeEachWord } from '../../../utilities/stringManipulation';
import { countries } from 'countries-list';


interface DefaultShippingAddressProps {
  user: UserInterface | null;
}

interface AddressInformation {
  country: string;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

const DefaultShippingAddress = ({user}: DefaultShippingAddressProps) => {
  const [capitalizedCity, setCapitalizedCity] = useState<string>('');
  const [capitalizedStreet, setCapitalizedStreet] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [addressInformation, setAddressInformation]= useState<AddressInformation>({
    country: '',
    city: '',
    street: '',
    number: 0,
    zipcode: '',
  });


  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AddressInformation
  ) => {
    setAddressInformation({ ...addressInformation, [field]: e.target.value });
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if(user) {
      setCapitalizedCity(capitalizeEachWord(user?.address.city));
      setCapitalizedStreet(capitalizeEachWord(user?.address.street));
       const newInfo: AddressInformation = {
        ...addressInformation,
        city: capitalizedCity,
        street: capitalizedStreet,
        number: user?.address.number,
        zipcode: user?.address.zipcode
      }
      setAddressInformation(newInfo);
    }
  },[user, capitalizedCity, capitalizedStreet, addressInformation])

  return (
    <Box component="form" onSubmit={handleSubmit} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} borderBottom={'2px solid #D9D9D9'} paddingY={2}>
      <Box>
      <Box borderBottom={'2px solid #D9D9D9'} paddingY={2}>
          <Typography variant={'h6'} fontFamily={'Mulish'}>
            Default Shipping Addresss
          </Typography>
        </Box>
      </Box>
      <Grid container paddingY={3} spacing={2}>
        <Grid item xs={6} paddingX={5}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: '30%',
                  },
                },
              }}
            >
              {Object.entries(countries).map(([countryCode, countryData]) => (
                <MenuItem key={countryCode} value={countryCode}>
                  {countryData.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} paddingX={5}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="city"
            value={addressInformation.city}
            multiline
            maxRows={2}
            onChange={(e) => handleInput(e, 'city')}
            helperText="Please select a city"
            autoComplete='off'
          />
        </Grid>
        <Grid item xs={6} paddingX={5}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="street"
            value={addressInformation.street}
            onChange={(e) => handleInput(e, 'street')}
            helperText="preferred street"
            autoComplete='off'
          />
        </Grid>
        <Grid item xs={6} paddingX={5}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="number"
            value={user?.address.number}
            onChange={(e) => handleInput(e, 'number')}
            helperText="the house or apartment number"
            autoComplete='off'
          />
        </Grid>
        <Grid item xs={6} paddingX={5}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="zipcode"
            value={user?.address.zipcode}
            onChange={(e) => handleInput(e, 'zipcode')}
            helperText="preferred zipcode"
            autoComplete='off'
          />
        </Grid>
      </Grid>
      <Box display={'flex'} justifyContent={'flex-end'} paddingX={5}>
        <Button type="submit" sx={{background: 'black', color: 'white',
          '&:hover': {
            background: 'white',
            '& > *': {color: 'black'},
            },
          }}>
          <Typography variant='h6' fontFamily={'Mulish'} color={'white'} >
            Save
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default DefaultShippingAddress