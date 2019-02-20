import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import Accepter from './Accepter';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
  logOut: {
   width: '300px'
  }
});

class NeedBloodList extends Component {
  constructor() {
    super();
    this.state = ({
      donors: '',
      //city: '',
      //bloodGroup: '',
    })
  }
  componentWillMount(){
    if(!localStorage.getItem('ID')){
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    console.log("this.props.match", this.props.match);
    const { params } = this.props.match
    this.filtureCity(params);
  }

  filtureCity(params) {
    let DonorsByBLoodGroup = {};

    firebase.database().ref(`user`).orderByChild("bloodGroup").equalTo(params.bloodGroup).once('value', (snapshot) => {
      const data = snapshot.val();
      let donors = [];
      console.log(donors)
      for (let key in data) {
        const obj = data[key];
        if (obj.city.toLowerCase() === params.city.toLowerCase()) {
          obj.key = key;
          donors.push(obj);
        }
        console.log(key, data[key]);
      }
      this.setState({ donors });
      console.log(donors)

    });
  }

  logOut = (event)=>{
    localStorage.removeItem('ID')
    this.props.history.push('/ ')
  }


  //class DonorList extends Component{
  //    function List(params) {
  //    }
  render() {
    console.log("this.props.history", this.props.history);
    const { classes } = this.props;
    return (
      <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Mobile No.</TableCell>
              <TableCell align="right">Blood Group</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.donors && this.state.donors.length &&
              this.state.donors.map((donor) => {
                return <TableRow>
                  <TableCell align="right">{donor.firstName + ' ' + donor.lastName}</TableCell>
                  <TableCell align="right">{donor.email}</TableCell>
                  <TableCell align="right">{donor.cellNumber}</TableCell>
                  <TableCell align="right">{donor.bloodGroup}</TableCell>
                  <TableCell align="right">{donor.address}</TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </Paper>
      <br />
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}><Button 
        onClick={this.userLogOut} 
        variant="contained" 
        color="primary" 
        className={[classes.button, classes.logOut].join(' ')}>
            Log Out
          </Button>
          </div>
          </div>
    );
  };


}
NeedBloodList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NeedBloodList);