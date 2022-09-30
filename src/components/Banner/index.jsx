import { Button, Typography, Box } from "@mui/material";
import BannerBackground from "../../assets/banner.jpg";

import getStyles from "./styles";

const Banner = () => {
  const classes = getStyles(BannerBackground);

  return (
    <Box sx={classes.wrapper}>
      <Typography variant="h1">
        Test assignment for front-end developer
      </Typography>
      <Typography variant="body1">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Typography>
      <Button variant="contained">Sign up</Button>
    </Box>
  );
};

export default Banner;
