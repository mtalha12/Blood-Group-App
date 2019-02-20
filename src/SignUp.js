import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import * as firebase from 'firebase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
//import RadioGroup from '@material-ui/core/RadioGroup';

 
import './FirebaseConfig'
import { resolve } from 'path';
 
 
const styles = theme => ({
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
  button: {
    margin: theme.spacing.unit,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});


class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        repeatPassword:'',
        donor : false,
     
  }
}
componentWillMount(){
  if(localStorage.getItem('ID')){
    this.props.history.push('/home');
  }
}
nameHandler = (event) => {
  console.log(event.target.value);
  this.setState({
      [event.target.name]: event.target.value,
  })
}

signUpClickHandler= (event) => {
  if(this.state.repeatPassword !== this.state.password){
    alert('Repeated password is uncorrect');
  }
  else{
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((data)=>{
    const { firstName, lastName, email, donor }= this.state;
    console.log(data.user.uid);
    const obj = {
      uid: data.user.uid,
      firstName, 
      lastName,
      email,
      donor,
    }
    firebase.database().ref('user').child(data.user.uid).set(obj).then((resolve) => {
          this.props.history.push('/');
        })
  })
  .catch(function(error) {
    alert(error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      });
    }
}

checkInput(){
  return!(this.state.firstName.length && this.state.lastName.length)
}
  
render(){
  const { classes } = this.props;
  return(
    <div align='center'>
    <h1>SignUp</h1>
       <TextField
       onChange={this.nameHandler}
          id="firstName"
          name="firstName"
          label="First Name"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
       <TextField
       onChange={this.nameHandler}
          id="lastName"
          name="lastName"
          label="Last Name"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
       <TextField
       onChange={this.nameHandler}
          id="email"
          name="email"
          label="Email"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
       <TextField
       onChange={this.nameHandler}
          id="password"
          name="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
           <TextField
           onChange={this.nameHandler}
          id="repeatPassword"
          name="repeatPassword"
          label="Repeat Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
                 {/* <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.genderRadioGroupHandler}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl> */}
          <Button 
          disabled={this.checkInput()}
          type='submit' 
          onClick={this.signUpClickHandler}
          variant="contained" 
          color="primary" 
          className={classes.button}>
          SignUp
          </Button>
      </div>
  )
}
// propTypes = {
//   classes: PropTypes.object.isRequired,
// };

}




export default withStyles(styles)(SignUp);

