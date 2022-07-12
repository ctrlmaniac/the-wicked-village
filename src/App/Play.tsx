import React from "react";
import { Player } from "../characters";
import Game from "../game";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import { IconHelp } from "@tabler/icons";

const Play: React.FC = () => {
  const [open, setOpen] = React.useState(false);

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
          <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1 }}>
            T.W.V.
          </Typography>

          <IconButton onClick={() => setOpen(true)} sx={{ ml: 2 }}>
            <IconHelp />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box id="main" sx={{ pl: 2 }}>
        <Toolbar />
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Help</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Use your keyboard to play the game:
          </Typography>
          <Typography>
            <kbd>F</kbd> or the UP ARROW to go forward.
          </Typography>
          <Typography>
            <kbd>R</kbd> or the RIGHT ARROW to go right.
          </Typography>
          <Typography>
            <kbd>B</kbd> or the DOWN ARROW to go back.
          </Typography>
          <Typography>
            <kbd>L</kbd> or the LEFT ARROW to go left.
          </Typography>
          <Typography>
            <kbd>Y</kbd> or <kbd>ENTER</kbd> to sey yes.
          </Typography>
          <Typography>
            <kbd>N</kbd> or <kbd>DELETE</kbd> to say no.
          </Typography>
          <Typography>
            <kbd>H</kbd> to hask for help.
          </Typography>
          <Typography>
            <kbd>I</kbd> to check the inventory.
          </Typography>
          <Typography>
            <kbd>D</kbd> to drop an item from the inventory.
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Play;
