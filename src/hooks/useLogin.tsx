import { useState, ChangeEvent, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, logoutUser as logoutUserAction } from "../features/userReducer/userSlice";
import { resetShoppingBag } from "../features/shoppingBagReducer/shoppingBagSlice";
import { LoginCredentials } from "../models/UserInterface";
import Cookies from "js-cookie";
import { RootState } from "../app/store";
import { regexCheckUsername } from "../utilities/stringManipulation";
import { setLocalUser } from "../features/localUserReducer/localUserSlice";


export const useLogin = () => {
  const [login, setLogin] =useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginValid, setLoginValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const userState = useSelector((state: RootState) => state.userState);
  const localUserState = useSelector((state: RootState) => state.localUserState);
  

  const dispatch = useDispatch();

  const checkLoginIsValid = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && e.target.value.length > 3 && e.target.value.length < 100 && e.target.value.trim() !== '' && regexCheckUsername(e.target.value)) {
      setLoginValid(true);
    } else {
      setLoginValid(false);
    }
  }

  const loginInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setLogin(e.target.value);
  }

  const checkPasswordIsValid = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value && e.target.value.length >= 6 && e.target.value.trim() !== '') {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const isUserLoggedIn = () => {
    const localUser = userState.user ? userState.user : null;
    const cookieIsSet = Cookies.get('authToken') ? true : false;
    return localUser && cookieIsSet;
  }

  const submitLogin = useCallback(() => {
    if(login && password && !localUserState.locked) {
      const credentials: LoginCredentials = {
        username: login,
        password
      }
      dispatch(loginRequest(credentials));
    }
  }, [login, password, localUserState.locked, dispatch]);

  const resetToDefaultBag = () => {
      dispatch(resetShoppingBag());
  }

  const emptyValues = () => {
    setLogin('');
    setPassword('');
    setLoginValid(false);
    setPasswordValid(false);
  }
  const logoutUser = () => {
    if(userState.loggedIn) {
      dispatch(logoutUserAction());
    }
    emptyValues();
  }

  const instantiateLocalUser = () => {
    const randomUsername = Math.random().toString(36).substring(7);
    dispatch(setLocalUser(randomUsername));
  }
  return {
    login,
    password,
    loginValid,
    passwordValid,
    setLogin,
    setPassword,
    setLoginValid,
    setPasswordValid,
    checkLoginIsValid,
    loginInputHandler,
    checkPasswordIsValid,
    passwordInputHandler,
    resetToDefaultBag,
    isUserLoggedIn,
    submitLogin,
    logoutUser,
    emptyValues,
    instantiateLocalUser,
  }
}

export interface UseLoginInterface {
  login: string;
  password: string;
  loginValid: boolean;
  passwordValid: boolean;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  setLoginValid: (loginValid: boolean) => void;
  setPasswordValid: (passwordValid: boolean) => void;
  checkLoginIsValid: (e: ChangeEvent<HTMLInputElement>) => void;
  loginInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  checkPasswordIsValid: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  resetToDefaultBag: () => void;
  isUserLoggedIn: () => boolean;
  submitLogin: () => void;
  logoutUser: () => void;
  emptyValues: () => void;
}