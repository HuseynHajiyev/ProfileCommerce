import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocalUserInterface } from "../../models/UserInterface";


interface InitialStateInterface extends LocalUserInterface {
  error: string | null;
  timerStarted: boolean;
}


const initialState: InitialStateInterface = {
  localUser: '',
  loginAttempts: 0,
  maxLoginAttempts: 3,
  locked: false,
  timetoUnlock: 0,
  timerStarted: false,
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
      } else {
        if(!state.timerStarted) {
          state.locked = true;
          state.timerStarted = true;
          state.timetoUnlock = Date.now() + 180000;
          state.error = `Too many login attempts. Please try again in 3 minutes.`;
        }
      }
    },
    lockUser: (state) => {
      state.locked = true;
      state.timetoUnlock = 180000;
    },
    unlockUser: (state) => {
      state.locked = false;
      state.timetoUnlock = 0;
    },
    resetLoginAttempts: (state) => {
      state.loginAttempts = 0;
      state.error = null;
      state.timerStarted = false;
      state.timetoUnlock = 0;
    },
    resetLocalUser: () => {
      return{
        ...initialState
      }
    }
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
