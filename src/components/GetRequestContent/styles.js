import theme from "../../configs/theme";

const getStyles = () => {
  return {
    wrapper: {
      margin: "140px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "50px",
      justifyContent: "center",
      textAlign: "center",
    },
    cardWrapper: {
      display: "flex",
      justifyContent: "center",
      gap: "29px",
      flexWrap: "wrap",
      width: "100%",
      [theme.breakpoints.down(426)]: {
        flexDirection: "column",
      },
    },
    card: {
      maxWidth: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxHeight: "254px",
      background: theme.palette.primary.light,
      borderRadius: "10px",
      padding: "20px",
      "& img": {
        width: "70px",
        height: "70px",
        borderRadius: 50,
      },
      "& p": {
        width: "250px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      [theme.breakpoints.down(769)]: {
        maxWidth: "50%",
        width: "320px",
      },
      [theme.breakpoints.down(426)]: {
        maxWidth: "100%",
        width: "328px",
        margin: "20px 16px",
      },
    },
    name: {
      margin: "20px 0px",
    },
    button: {
      width: "120px",
      padding: "5px",
      "&:hover": {
        background: theme.palette.primary.main,
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      minHeight: "537px",
    },
  };
};

export default getStyles;
