import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { logoutApi } from '../../api/userApi';
import { getUserApi } from '../../api/userApi';
import {useUser} from "../../context/userContext";

export default function ProfileMenu() {
  const {user, setUser} = useUser();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} className='z-50' style={{ zIndex: 1000, position: "fixed", right: "0.5rem", top: "7rem", backgroundColor: "#DE2104" }}>
            Profile
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem>{user ? user.name : "guest"}</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={async () => {
              popupState.close();
              await logoutApi();
            }}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
