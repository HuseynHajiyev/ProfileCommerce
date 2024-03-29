import AccountInformation from '../AccountInformation';
import AddressBank from '../AddressBank';
import NewsletterSubscriptions from '../NewsletterSubscriptions';
import MyOrders from '../MyOrders';
import MyFavourites from '../MyFavourites';
import { Box } from '@mui/material';
import NotLoggedIn from '../NotLoggedIn';
import { UserInterface } from '../../../models/UserInterface';

interface AccountPageSwitchProps {
  activePage: string;
  user: UserInterface | null;
  loggedIn: boolean;
  handleActivePage: (pageNumber: number, scrollTo?: string) => void;
}
const AccountPageSwitch = ({ activePage, user, loggedIn, handleActivePage }: AccountPageSwitchProps) => {
  const renderPage = () => {
    if(loggedIn) {
      switch (activePage) {
        case 'account_dashboards':
          return <AccountInformation handleActivePage={handleActivePage} />;
        case 'address_bank':
          return <AddressBank user={user} />;
        case 'newsletter_subscriptions':
          return <NewsletterSubscriptions />;
        case 'my_orders':
          return <MyOrders />;
        case 'my_favourites':
          return <MyFavourites />;
        default:
          return <AccountInformation handleActivePage={handleActivePage} />;
      }
    } else {
      return <NotLoggedIn />
    }
  };

  return (
    <Box paddingLeft={5}>
      {renderPage()}
    </Box>
    );
};

export default AccountPageSwitch