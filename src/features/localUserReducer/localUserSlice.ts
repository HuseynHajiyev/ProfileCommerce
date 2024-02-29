import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocalUserInterface } from "../../models/UserInterface";

interface InitialStateInterface extends LocalUserInterface {
  lockedAt: string | null;
  lockTimeout: number;
  error: string | null;
}


const initialState: InitialStateInterface = {
  localUser: '',
  loginAttempts: 0,
  maxLoginAttempts: 3,
  locked: false,
  lockedAt: null,
  lockTimeout: 1,
  error: null,
};


export const localUserSlice = createSlice({
  name: 'localUserState',
  initialState,
  reducers: {
    setLocalUser: (state, action: PayloadAction<string>) => {
      state.localUser = action.payload;
    },
    incrementLoginAttempts: (state) => {
      if(state.loginAttempts < state.maxLoginAttempts) {
        state.loginAttempts += 1;
      } 
    },
    lockUser: (state) => {
      state.locked = true;
      state.lockedAt = new Date().toISOString();
    },
    unlockUser: (state) => {
      state.locked = false;
      state.lockedAt = null;
      state.loginAttempts = 0;
    },
    resetLoginAttempts: (state) => {
      state.loginAttempts = 0;
      state.error = null;
      state.locked = false;
      state.lockedAt = null;
    },
    resetLocalUser: () => {
      return{
        ...initialState
      }
    
    },
  },
});
  
export const { 
  setLocalUser, 
  incrementLoginAttempts, 
  resetLoginAttempts, 
  lockUser,
  unlockUser,
  resetLocalUser, 
} = localUserSlice.actions;

export default localUserSlice.reducer;
