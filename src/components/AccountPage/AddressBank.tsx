import { Box } from "@mui/material"
import { UserInterface } from "../../models/UserInterface"
import AdressBankHeader from "./microComponents/AdressBankHeader";
import DefaultBillingAddress from "./microComponents/DefaultBillingAddress.tsx";
import DefaultShippingAddress from "./microComponents/DefaultShippingAddress.tsx";

interface AddressBankProps { 
  user: UserInterface | null;
}

const AddressBank = ({user}: AddressBankProps) => {
  return (
    <Box paddingBottom={5}>
      <AdressBankHeader />
      <DefaultBillingAddress user={user}/>
      <DefaultShippingAddress user={user}/>
    </Box>
  )
}

export default AddressBank