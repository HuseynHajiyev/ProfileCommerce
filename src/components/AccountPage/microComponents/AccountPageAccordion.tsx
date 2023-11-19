import { Accordion, AccordionDetails, AccordionSummary, Grid, Stack, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsBag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";


import { useRef, useState } from 'react';


interface AccountPageAccordionProps {
  handleActivePage: (pageNumber: number) => void;    
}

const AccountPageAccordion = ({handleActivePage} : AccountPageAccordionProps) => {
  const [primaryExpanded, setPrimaryExpanded] = useState<boolean[]>(Array(3).fill(false));
  const [secondaryExpanded, setSecondaryExpanded] = useState<boolean[]>(Array(3).fill(false));
  const secondaryActiveIndex = useRef<number>(0);

  const handlePrimaryClick = (index: number) => {
      let newArray = Array(3).fill(false);
      newArray[index] = !newArray[index];
      setPrimaryExpanded(newArray);
      if(index === 0) {
        secondaryActiveIndex.current = 1;
        newArray = Array(3).fill(false);
        newArray[0] = true;
        setSecondaryExpanded(newArray);
        handleActivePage(index + secondaryActiveIndex.current);
      } else {
        if(secondaryActiveIndex.current !== -1)
          secondaryActiveIndex.current = -1;
        newArray = Array(3).fill(false);
        setSecondaryExpanded(newArray);
        handleActivePage(index + 3);
      }
    };

    const handleSecondaryClick = (index: number) => {
      secondaryActiveIndex.current = index;
      const newArray = Array(3).fill(false);
      newArray[index] = !newArray[index];
      setSecondaryExpanded(newArray);
      handleActivePage(index + 1);
    }

  return (
    <Stack spacing={2}>
      <Stack sx={{ background: '#F7F7F7'}}>
        <Accordion sx={{background: 'inherit', boxShadow: 'none'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{background: primaryExpanded[0] ? '#EDECEC' : 'inherit',  px: '7%', py: '3%'}}
            onClick={() => handlePrimaryClick(0)}
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
            <AccordionSummary onClick={()=> handleSecondaryClick(0)}>
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} sx={{
                borderBottom: secondaryExpanded[0]? '1px solid' : 'none',
                paddingBottom: '3px',
                display: 'inline-block',
                lineHeight: '1.2',
              }}>
                Account Information
              </Typography>
            </AccordionSummary>
            <AccordionSummary onClick={()=> handleSecondaryClick(1)}>
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} sx={{
                borderBottom: secondaryExpanded[1]? '1px solid' : 'none',
                paddingBottom: '3px',
                display: 'inline-block',
                lineHeight: '1.2',
              }}>
                Address Bank
              </Typography>
            </AccordionSummary>
            <AccordionSummary onClick={()=> handleSecondaryClick(2)}>
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} sx={{
                borderBottom: secondaryExpanded[2]? '1px solid' : 'none',
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
          sx={{background: primaryExpanded[1] ? '#EDECEC' : 'inherit',  px: '7%', py: '3%'}}
          onClick={() => handlePrimaryClick(1)}
        >
          <Grid container spacing={2}>
            <Grid item>
              <BsBag size={20}/>
            </Grid>
            <Grid item>  
              <Typography variant='body2' fontFamily='Mulish' fontSize={'1rem'} fontWeight={'bold'}>
                My Orders
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionSummary 
          sx={{background: primaryExpanded[2] ? '#EDECEC' : 'inherit',  px: '7%', py: '3%'}}
          onClick={() => handlePrimaryClick(2)}
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