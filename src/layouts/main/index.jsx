import * as React from "react";
import Box from "@mui/material/Box";

import { MainRoutes } from "../../routes/main";

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      <Box component="main" sx={{ position: "relative" }}>
        <Box sx={{ p: 2, minHeight: "100vh" }}>
          <MainRoutes />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
