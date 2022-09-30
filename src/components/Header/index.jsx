import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../assets/Logo";

import getStyles from "./styles";

const Header = ({ handleScrollToUsers, handleScrollToSignUp }) => {
  const classes = getStyles();
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.content}>
        <Box sx={classes.logoWrapper}>
          <Logo sx={classes.logo} />
        </Box>
        <Box sx={classes.buttonsWrapper}>
          <Button variant="contained" onClick={handleScrollToUsers}>
            Users
          </Button>
          <Button variant="contained" onClick={handleScrollToSignUp}>
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
