import theme from "../../configs/theme";

const getStyles = () => {
  return {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& h1": {
        marginBottom: "50px",
        textAlign: "center",
        [theme.breakpoints.down(380)]: {
            width: "328px",
          },
      },
    },
    content: {
      marginBottom: "100px",
    },
    formWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    inputsWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      fontSize: "16px",
      marginBottom: "25px",
      "& .MuiFormHelperText-root": {
        height: "20px",
        marginLeft: 0,
      },
      "& div": {
        width: "380px",
        [theme.breakpoints.down(380)]: {
          width: "328px",
        },
        [theme.breakpoints.down(321)]: {
          width: "300px",
        },
      },
    },
    radioWrapper: {
      marginBottom: "47px",
    },
    radio: {
      "&.Mui-checked": { color: "#00BDD3" },
    },
    uploadArea: {
      display: "flex",
      alignItems: "center",
    },
    uploadButton: {
      padding: "15px",
      border: " 1px solid rgba(0, 0, 0, 0.87)",
      borderRadius: "4px 0px 0px 4px",
      cursor: "pointer",
    },
    imageName: {
      padding: "15px",
      color: "#7E7E7E",
      border: "1px solid #D0CFCF",
      borderRadius: "0px 4px 4px 0px",
      width: "100%",
      "& span": {
        width: "200px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        display: "block",
      },
    },
    uploadAreaError: {
      color: "#d32f2f",
      fontSize: "12px",
      height: "14px",
    },
    uploadAreaWrapper: {
      marginBottom: "50px",
    },
    button: {
      textAlign: "center",
    },
  };
};

export default getStyles;
