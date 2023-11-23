// MUI imports
import { Autocomplete, styled, lighten, darken } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const AutocompleteStyled = styled(Autocomplete)({
  '& .MuiAutocomplete-listbox': {
    overflow: 'auto',
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
      borderRadius: '10px',
      backgroundColor: '#F5F5F5',
    },
  },
  '& ul::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
    borderRadius: '15%',
  },
});


export const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

export const GroupItems = styled('ul')(({ theme }) => ({
  padding: 0,
  margin: 0,
  '& .MuiAutocomplete-option': {
    '&[data-focus="true"]': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.04)'
          : 'rgba(255, 255, 255, 0.08)',
    },
  },
}));


export const NavSearchLinkStyled = styled(NavLink)<NavLinkProps>`
    text-decoration: none;
    transition: color 0.2s;
    display: block;
    padding: 0;
    color: inherit;
    &:hover {
        color: #888;
    }
    &:visited {
        color: inherit;
    }
`;

export default AutocompleteStyled;