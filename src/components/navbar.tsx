import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  links: {
    color: "white",
    textDecoration: "none",
    paddingRight: "10px",
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography align="left">React with TypeScript</Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <Button
              className={classes.links}
              component={NavLink}
              to="/"
            >
              Home
            </Button>
            <Button
              className={classes.links}
              component={NavLink}
              to="/about"
            >
              About
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
