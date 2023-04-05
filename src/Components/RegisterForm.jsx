import { ThemeProvider } from "@emotion/react";
import dataArray from "../data/FormList";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import SchoolList from "../Data/SchoolList";

const RegisterForm = (props) => {
  const schools = SchoolList;
  const data = props.formData;
  const customTextField = dataArray.map(function (item) {
    return item.type === "text" || item.type === "password" ? (
      <TextField
        key={item.id}
        margin="normal"
        required
        fullWidth
        onChange={(e) => {
          props.handleOnChange(e);
        }}
        id={item.id}
        value={data[item.name] || ""}
        type={item.type}
        label={item.label}
        name={item.name}
        autoComplete={item.autoComplete}
        autoFocus
      />
    ) : (
      <FormControl
        key={item.id}
        sx={{
          display : "flex",
          width: "100%",
          textAlign : "left",
          flexDirection: "row",
          marginTop: 1.7,
        }}
      >
        <InputLabel id={item.id}>{item.label}</InputLabel>
        <Select
          onChange={props.handleOnChange}
          name={item.name}
          labelId={item.id}
          id={item.id}
          label={item.label}
          fullWidth
          required
          defaultValue=""
        >
          {schools.map(function (school,data) {
            return (
              <MenuItem  
                key={school.id}
                selected={data[item.name] == school.value ? true : false} 
                value={school.value}
              >
                {school.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  });
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box 
            component="form"
            noValidate
            onSubmit={(e) => props.handleSubmit(e)} 
            nosx={{ mt: 1 }}
          
          >
            {customTextField}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
            >
              Register
            </Button>
            <Backdrop
              sx={{
                color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1
              }}
              open={props.openBackdrop}
            >
              <CircularProgress color="inherit"/>
            </Backdrop>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
