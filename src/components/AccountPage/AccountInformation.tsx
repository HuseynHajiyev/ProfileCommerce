import { Box } from "@mui/material"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useRef } from "react";
import AccountInformationHeader from "./microComponents/AccountInformationHeader";
import AccountInformationBody from "./microComponents/AccountInformationBody";
import AccountInformationAddress from "./microComponents/AccountInformationAddress";
import { capitalizeEachWord } from "../../utilities/stringManipulation";

interface AccountInformationProps { 
  handleActivePage: (pageNumber: number, scrollTo?: string) => void;
}

const AccountInformation = ({handleActivePage} : AccountInformationProps) => {
  const user = useSelector((state: RootState) => state.userState.user);
  const nameAndSurnameCapitalized = useRef<string>('');
  if(user){
    nameAndSurnameCapitalized.current = capitalizeEachWord(user.name.firstname + ' ' + user.name.lastname);
  }
  return (
    <Box paddingBottom={'10%'}>
      <AccountInformationHeader nameAndSurnameCapitalized={nameAndSurnameCapitalized.current} />
      <AccountInformationBody nameAndSurnameCapitalized={nameAndSurnameCapitalized.current} user={user} />
      <AccountInformationAddress handleActivePage={handleActivePage} user={user} />
    </Box>
  )
}

export default AccountInformation