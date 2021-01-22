import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Image from "material-ui-image";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    paddingTop: "100px",
  },
  myImg: {
    borderRadius: "50px",
  },
});

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <h1>About application:</h1>
          <h4>It's my first experience on writing code on React TypeScript</h4>
        </Grid>
        <Grid item>
          <Image
            src="https://avatars3.githubusercontent.com/u/53488341?s=460&u=e4a147e1838864b35cebf46c3a6c5825ce8577bd&v=4"
            imageStyle={{
              borderRadius: "50%",
            }}
            />
            <h5>Share your feedback to ivan92.mailbox@gmail.com</h5>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
