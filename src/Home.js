import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'; 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
 
 
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  card: {

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  signout:{
    width:10
  }
});

class Home extends Component {
   SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
   }
   componentWillMount(){
     if(!localStorage.getItem('ID')){
       this.props.history.push('/')
     }
   }

   donaterClickHandler = (event) => {
    this.props.history.push('./Donater')
}

    accepterClickHandler = (event) => {
      this.props.history.push('./Accepter')
    }
    render() {
      const { classes } = this.props
      return (
        <div> 
          <Grid container spacing={8}>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
        <br /><br />
        <div id='donater'>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
        <h3>Donater</h3>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          If,
        </Typography>
        <Typography component="p">
          You want to donate <b>Blood</b> so please click the <br /> button.
          <br />
          {'"God Blessed You"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" type='Button' onClick={this.donaterClickHandler} variant="contained" color="primary" className={classes.button}>Click here</Button>
      </CardActions>
    </Card> 
    </div>       
        </Grid>

        <Grid item xs={3}>
        <br /><br />
        <div id='accepter'>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
        <h3>Accepter</h3>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          If,
        </Typography>
        <Typography component="p">
          You need to <b>Blood</b> so please click the <br /> button.
          <br />
          {'"God Blessed You"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" type='Button' onClick={this.accepterClickHandler} variant="contained" color="primary" className={classes.button}>Click here</Button>
      </CardActions>
    </Card>
    <br/>
        </div>
    {/* <Button id='signout' type='Button' onClick={this.userClickSignOut} variant="contained" color="primary" className={classes.button}>Sign Out</Button> */}
        </Grid>
        <Grid item xs={3}></Grid>
        </Grid>
        </div> 
      );  
    }
  }

  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Home)
  