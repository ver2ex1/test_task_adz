import theme from "../configs/theme";

const getStyles = () => {
  return {
    wrapper: {
      maxWidth: 1024,
      margin: "0 auto",
      width: "100%",
      [theme.breakpoints.down(769)]: {
        overflow: "hidden",
      },
    },
  };
};

export default getStyles;
