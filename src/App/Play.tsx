import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import { Player } from "../characters";
import Game from "../game";

const Play: React.FC = () => {
  React.useEffect(() => {
    const player = new Player();

    // Init the game
    const game = new Game(player);

    game.play();
  }, []);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              padding: 2,
              backgroundColor: "inherit",
            }}
          >
            The Wicked Village
          </Typography>
        </Toolbar>
      </AppBar>
      <Box id="main" sx={{ pl: 2 }}>
        <Toolbar />
      </Box>
    </React.Fragment>
  );
};

export default Play;
