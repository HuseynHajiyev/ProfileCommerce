import { useEffect, useState } from 'react'
import { RootState } from '../../../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { unlockUser } from '../../../../../features/localUserReducer/localUserSlice';

const UnlockTimer= () => {
  const [timeLeft, setTimeLeft] = useState('');
  const localUserState = useSelector((state: RootState) => state.localUserState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localUserState.lockedAt) {
      const lockedAtDate = new Date(localUserState.lockedAt);

      const unlockTime = new Date(lockedAtDate.getTime() + localUserState.lockTimeout * 60000);

      const intervalId = setInterval(() => {
        const now = new Date();
        const difference = unlockTime.getTime() - now.getTime();

        if (difference <= 0) {
          clearInterval(intervalId);
          setTimeLeft('00:00');
          dispatch(unlockUser());
        } else {
          const minutes = Math.floor(difference / 60000).toString().padStart(2, '0');
          const seconds = Math.floor((difference % 60000) / 1000).toString().padStart(2, '0');
          setTimeLeft(`${minutes}:${seconds}`);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [localUserState.lockedAt, localUserState.lockTimeout, dispatch]);
  
  return (
      <Typography variant="body2" display="block" align="center" textTransform={'none'} sx={{ color: 'red' }}>
        Time to unlock: {timeLeft}
      </Typography>
  )
}

export default UnlockTimer