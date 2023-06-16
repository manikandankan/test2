import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface HeaderProps {
  /**
   * The name of the application to display in the site header
   */
  applicationName: string;
  /**
   * The URL for the users avatar image
   */
  avatar?: string;
  /**
   * On click function for popover
   */
  onClickFunc?: () => void ;
}

const Header = ({ applicationName, avatar, onClickFunc }: HeaderProps) => (
  <AppBar position="static" color="transparent" sx={{ border: "1px solid" }}>
    <Toolbar>
      <Box sx={{ display:"flex", flexGrow: 1 , alignItems: 'center','& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 1.5,
          }}}>
      <IconButton onClick={onClickFunc}>
        <AppsIcon/>
      </IconButton>
      
      <Divider orientation="vertical" flexItem sx={{  }}/>
      <Typography>{applicationName}</Typography>
      {/* <FormGroup>
        <FormControlLabel control={<Switch />} label="Light Mode" />
      </FormGroup> */}
      </Box>
      <Box sx={{ flexGrow: 1 }} /><Box sx={{ display:"flex", flexGrow: 1 , alignItems: 'center',
      justifyContent:"flex-end",
      '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          }}}>
      <Avatar alt="Cindy Baker" src={avatar} >
        CB 
      </Avatar>
      <KeyboardArrowDownIcon fontSize="small"/>

      <Divider orientation="vertical" flexItem sx={{ '& vr': {
    mx: 1.5,
  }}}/>
      <Typography>MyWiz</Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
