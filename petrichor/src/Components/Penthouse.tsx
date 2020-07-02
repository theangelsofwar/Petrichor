import React from 'react';
// import withLayout from '../../hocs/withLayout';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import utilities from '../../utilities';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center'
  },
  description: {
    maxWidth: 500,
    margin: '0 auto 20px auto'
  },
  button: {
    margin: '0 10px 15px 10px'
  }
}));


function Home() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section 
      className={classes.root}
    >
      <h1> Petrichor Commerce Square </h1>
      <p className={classes.description}>
        graphql api endpoints
      </p>
      <Button 
        variant="contained" 
        className={classes.button} 
        target="_blank" 
        href=""
      >
        Go Straight To The Source
      </Button>
    </section>
  );
}
//wrap withLayout(Home)
export default Home;