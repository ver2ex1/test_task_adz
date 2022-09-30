import theme from "../../configs/theme";

const getStyles = (banner) => {
  return {
    wrapper: {
      display: "flex",
      height: "650px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "89px 322px",
      background: `url(${banner}) no-repeat center center fixed`,
      backgroundSize: "cover",
      color: theme.palette.primary.light,
      textAlign: "center",
      "& h1": {
        marginBottom: "21px",
      },
      "& p": {
        marginBottom: "32px",
      },
      [theme.breakpoints.down(769)]: {
        padding: "89px 194px",
      },
      [theme.breakpoints.down(426)]: {
        padding: "40px 16px 71px 16px",
      },
    },
  };
};

export default getStyles;
