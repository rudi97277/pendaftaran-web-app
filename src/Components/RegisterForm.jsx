import { ThemeProvider } from "@emotion/react";
import dataArray from "../data/FormList";
import {
  Box,
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
          display: "flex",
          width: "100%",
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
          defaultValue=""
        >
          {schools.map(function (school) {
            return (
              <MenuItem key={school.id} value={school.value}>
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
          <Box component="form" sx={{ mt: 1 }}>
            {customTextField}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
