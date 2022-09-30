import theme from "../../configs/theme";

const getStyles = () => {
  return {
    wrapper: {
      backgroundColor: theme.palette.primary.light,
    },
    content: {
      display: "flex",
      alignItems: "center",
      padding: "13px 60px",
      maxWidth: "1024px",
      [theme.breakpoints.down(769)]: {
        padding: "13px",
      },
    },
    logo: {
      width: 104,
      height: 26,
    },
    logoWrapper: {
      flex: 1,
    },
    buttonsWrapper: {
      display: "flex",
      gap: "10px",
    },
  };
};

export default getStyles;
