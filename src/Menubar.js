import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import GroupIcon from "@material-ui/icons/Group";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import TelegramIcon from "@material-ui/icons/Telegram";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function Menubar() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="inherit"
            {...bindTrigger(popupState)}
          >
            <MenuIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              {" "}
              <GroupIcon />
              New Group
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              {" "}
              <ContactsIcon /> Contacts
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              {" "}
              <SettingsIcon />
              Settings
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              {" "}
              <HelpIcon />
              Telegram FAQ
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              {" "}
              <TelegramIcon />
              About
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default Menubar;