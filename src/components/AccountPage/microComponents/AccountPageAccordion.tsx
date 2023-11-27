import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Stack, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsBag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';


interface AccountPageAccordionProps {
  activePage: string;
  handleActivePage: (pageNumber: number, scrollTo?: string) => void;    
}

const AccountPageAccordion = ({activePage, handleActivePage} : AccountPageAccordionProps) => {
  const [primaryExpanded, setPrimaryExpanded] = useState<boolean>(false);
  const newOrdersLength = useSelector((state: RootState) => state.userState.newOrdersLength);

    const handleClick = (index: number) => {
      handleActivePage(index);
    }

    useEffect(() => {
      if( activePage === 'account_information' || activePage === 'address_bank' || activePage === 'newsletter_subscriptions') {
        setPrimaryExpanded(true);
      } else {
        setPrimaryExpanded(false);
      }
    },[activePage])

  return (
    <Stack spacing={2}>
      <Stack sx={{ background: '#F7F7F7'}}>
        <Accordion sx={{background: 'inherit', boxShadow: 'none'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{background: primaryExpanded ? '#EDECEC' : 'inherit',  px: '7%', py: '3%'}}
            onClick={() => handleClick(0)}
          >
            <Grid container spacing={2}>
              <Grid item>
                <FaRegUser size={20}/>
              </Grid>
              <Grid item>  
                <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} fontWeight={'bold'}>
                  Account Dashboards
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{ px: '7%', py: '3%'}} >
            <AccordionSummary onClick={()=> handleClick(1)}>
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} sx={{
                borderBottom: activePage === 'account_information' ? '1px solid' : 'none',
                paddingBottom: '3px',
                display: 'inline-block',
                lineHeight: '1.2',
              }}>
                Account Information
              </Typography>
            </AccordionSummary>
            <AccordionSummary onClick={()=> handleClick(2)}>
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} sx={{
                borderBottom: activePage === 'address_bank' ? '1px solid' : 'none',
                paddingBottom: '3px',
                display: 'inline-block',
                lineHeight: '1.2',
              }}>
                Address Bank
              </Typography>
            </AccordionSummary>
            <AccordionSummary onClick={()=> handleClick(3)}>
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} sx={{
                borderBottom: activePage === 'newsletter_subscriptions' ? '1px solid' : 'none',
                paddingBottom: '3px',
                display: 'inline-block',
                lineHeight: '1.2',
              }}>
                Newsletter Subscriptions
              </Typography>
            </AccordionSummary>
          </AccordionDetails>
        </Accordion>
        <AccordionSummary 
          sx={{background: activePage === 'my_orders' ? '#EDECEC' : 'inherit',  px: '7%', py: '3%'}}
          onClick={() => handleClick(4)}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Box position={'relative'}>
              {newOrdersLength <= 0 ? null : (
                  <Box component={'span'} sx={{
                    position: 'absolute',
                    top: '-0.3rem',
                    right: '-0.5rem',
                    padding: '0px 4px',
                    borderRadius: '100%',
                    background: 'red',
                    color: 'white',
                    fontSize: '10px',
                  }}>{newOrdersLength > 100 ? `99+` : newOrdersLength}</Box>
                )}
                  <BsBag size={20}/>
              </Box>
            </Grid>
            <Grid item>  
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} fontWeight={'bold'}>
                My Orders
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionSummary 
          sx={{background: activePage === 'my_favourites' ? '#EDECEC' : 'inherit',  px: '7%', py: '3%'}}
          onClick={() => handleClick(5)}
        >
          <Grid container spacing={2}>
            <Grid item>
              <AiOutlineHeart size={20}/>
            </Grid>
            <Grid item>  
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} fontWeight={'bold'}>
                My Favourites 
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
      </Stack>
    </Stack>
  )
}

export default AccountPageAccordion