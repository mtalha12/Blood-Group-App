import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    container: { 
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
});
class SignIn extends Component{
    constructor(){
        super();
        this.state={

        }
    }    
    
}
      function CenteredGrid(props) {
          const { classes } = props;
          
          return (
              <div className={classes.root}>
    <h2> LogIn </h2>
      <Grid container spacing={24}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <TextField
          id="standard-password-input"
          label="Email"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="eg: myname123@mail.com"
          />
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Password"
          />
        </Grid>
        <Grid item xs={3}></Grid>
        
      </Grid>
    </div>
  );
} 

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);