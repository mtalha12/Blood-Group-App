import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import './FirebaseConfig'
import { EDEADLK } from 'constants';


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


class Accepter extends Component{
    constructor(){
        super();
        this.state = ({
            city: '',
            bloodGroup: '',
        })
    }
    
    componentWillMount(){
      if(!localStorage.getItem('ID')){
        this.props.history.push('/')
      }
    }

    nameHandler = (event) =>{
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value,
        })
        console.log(this.state.city);
        console.log(this.state.bloodGroup);
    }
    needAccepterHandler =(event) =>{
      this.props.history.push(`/donorslist/${this.state.bloodGroup}/${this.state.city}`);
    }

    cheekInput(){
      return!(this.state.city.length && this.state.bloodGroup.length)
    }
    
    render(){
        const { classes } = this.props;
        return(
            <div align='center'>
            <h2>Which <b>blood</b> do you need?</h2>
                <TextField
       onChange={this.nameHandler}
          id="city"
          name="city"
          label="City"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
          <InputLabel htmlFor="filled-age-simple">Blood Group</InputLabel>
          <br />
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
            <Button
            disabled={this.cheekInput()}
            size="small" 
            type='Button' 
            onClick={this.needAccepterHandler} 
            variant="contained"
            color="primary" 
            className={classes.button}>
            Click here
             </Button>
            </div>
        )
    }

    
}
export default withStyles (styles)(Accepter);










