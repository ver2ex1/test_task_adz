import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import GetRequestContent from "../components/GetRequestContent";
import PostRequestContent from "../components/PostRequestContent";
import tokenStore from "../stores/tokenStore";

import getStyles from "./styles";

const MainPage = () => {
  const classes = getStyles();
  const { getToken } = tokenStore;
  const users = useRef(null);
  const createUser = useRef(null);
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      getToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const scrollToSection = (ref) => {
    window.scrollTo({ top: ref?.current?.offsetTop, behavior: "smooth" });
  };

  const handleScrollToUsers = () => scrollToSection(users);
  const handleScrollToSignUp = () => scrollToSection(createUser);
  return (
    <Box sx={classes.wrapper}>
      <Header
        handleScrollToUsers={handleScrollToUsers}
        handleScrollToSignUp={handleScrollToSignUp}
      />
      <Banner />
      <GetRequestContent ref={users} />
      <PostRequestContent ref={createUser} />
    </Box>
  );
};

export default MainPage;
