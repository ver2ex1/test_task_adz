import { useEffect, useState, forwardRef } from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Loading from "../../commonComponents/Loading";
import usersStore from "../../stores/usersStore";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import getStyles from "./styles";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required field")
    .min(2, "Minimal length of name need to be 2 symbols")
    .max(60, "Maximum length of name can be 60 symbols"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required field")
    .matches(),
  phone: Yup.string()
    .required("Phone is required field")
    .matches(/^\+{0,1}380([0-9]{9})$/gm, "Please enter valid phone number"),
  position_id: Yup.string("Position is required field")
    .required("Position is required field")
    .nullable(),
  photo: Yup.string().required("Photo is required field"),
});

const PostRequestContent = forwardRef((props, ref) => {
  const [photo, setPhoto] = useState("");
  const [photoName, setPhotoName] = useState("");
  const classes = getStyles();
  const { positions, getPositions, isPositionsLoading, createUser, getUsers } =
    usersStore;
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isDirty =
    dirtyFields.name &&
    dirtyFields.email &&
    dirtyFields.position_id &&
    dirtyFields.phone;
  const onSubmit = (data) => {
    if (photo) {
      const payload = { ...data, photo };
      createUser({ payload, callback: () => getUsers() });
      setPhoto("");
      setPhotoName("");
      reset();
    }
  };
  useEffect(() => {
    getPositions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlePhotoChange = (e) => {
    if (e.target.files[0].size > 500000) {
      toast.error("Size of image is too big!");
    } else {
      setValue("photo", e.target.files[0]);
      setPhotoName(e.target.files[0].name);
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <Box sx={classes.wrapper} ref={ref}>
      <Typography variant="h1">Working with POST request</Typography>
      <Box sx={classes.content}>
        {isPositionsLoading ? (
          <Loading />
        ) : (
          <Box sx={classes.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={classes.inputsWrapper}>
                <TextField
                  placeholder="Your name"
                  {...register("name")}
                  helperText={
                    errors.name?.message ? errors.name?.message : <span></span>
                  }
                  error={Boolean(errors.name?.message)}
                />
                <TextField
                  placeholder="Email"
                  {...register("email")}
                  helperText={
                    errors.email?.message ? (
                      errors.email?.message
                    ) : (
                      <span></span>
                    )
                  }
                  error={Boolean(errors.email?.message)}
                />
                <TextField
                  placeholder="Phone"
                  helperText={
                    errors.phone?.message || "+38 (XXX) XXX - XX - XX"
                  }
                  {...register("phone")}
                  error={Boolean(errors.phone?.message)}
                />
              </Box>
              <Box>
                <Typography variant="body1">Select your position</Typography>
                <Box sx={classes.radioWrapper}>
                  <RadioGroup>
                    {positions.map((item) => (
                      <FormControlLabel
                        key={item.id}
                        control={<Radio sx={classes.radio} />}
                        label={item.name}
                        value={item.id}
                        {...register("position_id")}
                      />
                    ))}
                  </RadioGroup>
                  <span style={classes.uploadAreaError}>
                    {errors.position_id?.message && errors.position_id?.message}
                  </span>
                </Box>
                <label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/jpg, image/jpeg"
                    onChange={handlePhotoChange}
                  />
                  <Box sx={classes.uploadAreaWrapper}>
                    <Box sx={classes.uploadArea}>
                      <Box sx={classes.uploadButton}>Upload</Box>
                      <Box sx={classes.imageName}>
                        <span>{photoName || "Upload your photo"}</span>
                      </Box>
                    </Box>
                  </Box>
                </label>
                <Box sx={classes.button}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!isDirty || !photo}
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default observer(PostRequestContent);
