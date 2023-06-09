import dataArray from "../../../data/FormList";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SchoolList from "../../../data/SchoolList";

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
      <FormControl key={item.id} fullWidth margin="normal">
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
          {schools.map(function (school, data) {
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
  return (
    <Box
      sx={{
        maxWidth: "65vh",
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
      }}
    >
      <Typography component="h1" variant="h5" sx={{m: 1}}>
        Register Student
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => props.handleSubmit(e)}
      >
        {customTextField}
        {props.info && (<Typography  sx={{color : 'red'}}>
          {props.info}
        </Typography>)}  
      
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={props.openBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Box>
  );
};

export default RegisterForm;
