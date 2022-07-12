import { Alert, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "100%", mb: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          The Wicked Village
        </Typography>
        <Typography>
          Your daughter has been kidnapped and all the clues brought you to a
          village.
        </Typography>
        <Typography>You have to find your daughter at all costs!</Typography>
        <Typography gutterBottom>
          It's so quiet that you almost fear that something is lurking, waiting
          for you...
        </Typography>
        <Typography>Enter the village!</Typography>
      </Box>

      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={() => navigate("/play")}
        sx={{ mb: 2 }}
      >
        Play
      </Button>

      <Alert severity="warning">
        <Typography>You'll need a keyboard!</Typography>
      </Alert>
    </Box>
  );
};

export default Welcome;
