import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const styles = {
  static: {
    display: "flex",
  },
};

const Loading = ({ position = "static" }) => {
  return (
    <Box sx={styles[position]}>
      <CircularProgress sx={{ color: "black" }} />
    </Box>
  );
};

export default Loading;
