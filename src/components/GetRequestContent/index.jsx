import { useEffect, useState, forwardRef } from "react";
import { Box } from "@mui/system";
import Loading from "../../commonComponents/Loading";
import usersStore from "../../stores/usersStore";
import { observer } from "mobx-react-lite";

import getStyles from "./styles";
import { Button, Typography } from "@mui/material";

const GetRequestContent = forwardRef((props, ref) => {
  const [page, setPage] = useState(1);
  const classes = getStyles();
  const { getUsers, users, pages, isLoadingUsers } = usersStore;
  useEffect(() => {
    getUsers(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleShowMore = () => {
    setPage(page + 1);
  };
  return (
    <Box sx={classes.wrapper} ref={ref}>
      <Typography variant="h1">Working with GET request</Typography>
      <Box sx={classes.content}>
        {isLoadingUsers ? (
          <Loading />
        ) : (
          <>
            <Box sx={classes.cardWrapper}>
              {users.map((item) => {
                return (
                  <Box sx={classes.card} key={item.id}>
                    <img src={item.photo} alt="avatar" />
                    <Typography variant="body1" sx={classes.name}>
                      {item.name}
                    </Typography>
                    <Typography variant="body1">{item.position}</Typography>
                    <Typography variant="body1">{item.email}</Typography>
                    <Typography variant="body1">{item.phone}</Typography>
                  </Box>
                );
              })}
            </Box>
            {page + 1 < pages && (
              <Button
                variant="contained"
                sx={classes.button}
                onClick={handleShowMore}
              >
                Show more
              </Button>
            )}
          </>
        )}
      </Box>
    </Box>
  );
});

export default observer(GetRequestContent);
