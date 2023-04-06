import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Info = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{}}>HOME INFO</Typography>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Button variant="outlined" onClick={() => navigate("/login")}>
            LOGIN
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button variant="outlined" onClick={() => navigate("/register")}>
            REGISTER
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
