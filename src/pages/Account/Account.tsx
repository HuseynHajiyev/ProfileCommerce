// MUI components
import { Box, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import AccountPageAccordion from '../../components/AccountPage/microComponents/AccountPageAccordion';
import AccountPageSwitch from '../../components/AccountPage/microComponents/AccountPageSwitch';
import AccountPageNeedHelp from '../../components/AccountPage/microComponents/AccountPageNeedHelp';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useMainScroll } from '../../hooks/useMainScroll';

const Account = () => {
  const [activePage, setActivePage] = useState<string>('account_dashboards');
  const { handleScrollSection } = useMainScroll();
  const userState = useSelector((state: RootState) => state.userState);
  const handleActivePage = (pageNumber: number, scrollTo?: string) => {
    switch(pageNumber) {
      case 0:
      case 1:
        setActivePage('account_information');
        break;
      case 2:
        setActivePage('address_bank');
        break;
      case 3:
        setActivePage('newsletter_subscriptions');
        break;
      case 4:
        setActivePage('my_orders');
        break;
      case 5:
        setActivePage('my_favourites');
        break;
      default:
        setActivePage('account_dashboards');
        break;
    }
    if(scrollTo) {
      handleScrollSection(scrollTo);
    }
  }

  return (
    <Box paddingTop={5}>
        <Grid container width={'100%'}>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <AccountPageAccordion activePage={activePage} handleActivePage={handleActivePage}  />
              <AccountPageNeedHelp />
            </Stack>
          </Grid>
          <Grid item xs={9}>
            <AccountPageSwitch activePage={activePage} user={userState.user} loggedIn={userState.loggedIn} handleActivePage={handleActivePage}/>
          </Grid>
        </Grid>
    </Box>
  )
}

export default Account
