import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './FirebaseConfig'
import { resolve } from 'url';
 
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
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2,
      },
});

class DonarDetails extends Component {
    constructor(){
        super();
        this.state = {
        //    firstName:'',
        //    lastName:'',
            age : '',
            lastDonateDate: '',
            address : '',
            city: '',
            cellNumber: '',
            bloodGroup: '',

        }
    }
    componentWillMount(){
      if(!localStorage.getItem('ID')){
        this.props.history.push('/')
      }
    }

    componentDidMount(){
       const currentUserUID = localStorage.getItem('ID');
       console.log(currentUserUID)
        firebase.database().ref('user/'+currentUserUID).once('value').then((snapshot)=> {
  const currentUser = snapshot.val() ;
  console.log(currentUser);
  //this.setState({
  //       firstName:currentUser.firstName,
  //   lastName:currentUser.lastName,
  //   dateOfBirth:currentUser.dateOfBirth,
  //   address:currentUser.address,
  //   city:currentUser.city,
  //   cellNumber:currentUser.cellNumber,
  //    })
});
     //console.log(firstName);
    }
    nameHandler = (event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value,
          })
        }
        donarDetailsHandler = (event)=>{
          this.checkLastDonateDate();
      let donorsUsers = localStorage.getItem('ID');
      const { age, lastDonateDate, address, city, bloodGroup, cellNumber} = this.state;
      firebase.database().ref('user/'+ donorsUsers).update({
        
        //firebase.database().ref('Donors/'+ donorsUsers).set({
          age : age,
          lastDonateDate: lastDonateDate,
          address : address,
          city : city,
          bloodGroup : bloodGroup,
          cellNumber : cellNumber,
          donor : true,
        })
        // })
        alert('Thank you for donate your blood.');
        this.props.history.push('/home');
        
    }
    checkLastDonateDate(){
          let userDate = new Date(this.state.lastDonateDate);
          let converter = userDate.getTime();
          converter =converter/(1000*60*60*24)
      console.log('Time Now :' + converter);

      const currentMonth = new Date().getTime();
      console.log(currentMonth);

    }

    render(){
        const { classes } = this.props;
        return(
            <div align='center'>
            <h2>Your Details</h2>
                {/* <TextField
       onChange={this.nameHandler}
          id="firstName"
          name="firstName"
          label="First Name"
          value={this.state.firstName}
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
          <TextField
       onChange={this.nameHandler}
          id="lastNmae"
          name="lastName"
          label="Last Name"
          value={this.state.lastName}
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br /> */}
           <TextField
       onChange={this.nameHandler}
          id="age"
          name="age"
          label="Age"
          value={this.state.dateOfBirth}
          className={classes.textField}
          type="number"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
           <TextField
       onChange={this.nameHandler}
          id="lastDonateDate"
          name="lastDonateDate"
          label="Last Donate Date"
          value={this.state.lastDOnateDate}
          required
          className={classes.textField}
          type="date"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
           <TextField
       onChange={this.nameHandler}
          id="address"
          name="address"
          label="Address"
          value={this.state.address}
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
          <TextField
       onChange={this.nameHandler}
          id="city"
          name="city"
          label="City"
          value={this.state.city}
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
           <TextField
       onChange={this.nameHandler}
          id="cellNumber"
          name="cellNumber"
          label="Cell Number"
          value={this.state.cellNumber}
          className={classes.textField}
          type="number"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
          <InputLabel htmlFor="filled-age-simple">Blood Group</InputLabel>
          <br />
          <Select
            value={this.state.bloodGroup}
            onChange={this.nameHandler}
            input={<FilledInput name="bloodGroup" id="bloodGroup" />}
          >
            <MenuItem value={"o"}>O</MenuItem>
            <MenuItem value={"a"}>A</MenuItem>
            <MenuItem value={"b"}>B</MenuItem>
            <MenuItem value={"ab"}>AB</MenuItem>
          </Select>


          <br />

          <Button  type='Button' onClick={this.donarDetailsHandler} variant="contained" color="primary" className={classes.button}>Click here</Button>

           
            </div>
        )
    }

}
export default withStyles(styles)(DonarDetails);





