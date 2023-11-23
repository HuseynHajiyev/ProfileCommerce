import { Box } from "@mui/material"
import { UserInterface } from "../../models/UserInterface"
import AdressBankHeader from "./microComponents/AdressBankHeader";
import DefaultBillingAddress from "./microComponents/DefaultBillingAddress.tsx";
import DefaultShippingAddress from "./microComponents/DefaultShippingAddress.tsx";
import { useEffect, useRef } from "react";
import { useMainScroll } from "../../hooks/useMainScroll.tsx";

interface AddressBankProps { 
  user: UserInterface | null;
}

const AddressBank = ({user}: AddressBankProps) => {
  const { scrollSection, linkScrolled, handleLinkScrolled } = useMainScroll();
  const billingAddress = useRef<HTMLElement | null>(null);
  const shippingAddress = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (scrollSection) {
      console.log('scrollSection', scrollSection, 'linkScrolled', linkScrolled);
     if(scrollSection === 'billing-address' && !linkScrolled){
       handleLinkScrolled(true);
      billingAddress.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
     } else if (scrollSection === 'shipping-address' && !linkScrolled) {
      shippingAddress.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      handleLinkScrolled(true);
     } else {
      return;
     }
    }
  }, [scrollSection, linkScrolled, handleLinkScrolled]);

  useEffect(() => {
    handleLinkScrolled(true);
  }, [handleLinkScrolled])

  return (
    <Box paddingBottom={5}>
      <AdressBankHeader />
        <Box ref={billingAddress}>
          <DefaultBillingAddress user={user}/>
        </Box>
        <Box ref={shippingAddress}>
          <DefaultShippingAddress user={user}/>
        </Box>
    </Box>
  )
}

export default AddressBank