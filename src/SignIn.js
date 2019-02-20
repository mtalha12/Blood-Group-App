import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';
import './FirebaseConfig';
   
const styles = {
    card: {
    width:'380px'
    },
    media: {
        height: 140,
    },
    signIn : {
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center',
        height: '100vh'
    }
    
};

 

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
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

      signInClickHandler = (event) => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((result)=>{
            console.log(result);
            const userUID =result.user.uid;
            localStorage.setItem('ID' ,userUID);
       // firebase.database().ref('user').child(result.user.uid).then((result)=>{
         //      console.log(result.user.uid);
          //  })
            this.props.history.push('./home')
            console.log(result);
        })
        .catch((error)=> {
            alert(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });

      }
          
        // firebase.database().ref("user").once("value").then(snapshot => {
        //     const data = snapshot.val();
        //     const usersArray = []
        //     for(let key in data){
        //         usersArray.push(data[key])
        //     }
        //     for(var i=0;i<usersArray.length;i++){
        //         console.log()
        //         if(this.state.email && this.state.password === i.email && i.password){
        //             console.log('email'+i.email + 'password'+i.password )
        //         }
        //     }
        //     })
        

      signUpClickHandler = (event) => {
        this.props.history.push('./SignUp')
    }
      
      


    render() {
        const { classes } = this.props;
        return (
            <div  className={classes.signIn}>
            <Card className={classes.card}>
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            SignIn
                        </Typography>
                      <TextField
       onChange={this.nameHandler}
          id="email"
          name="email"
          label="Email"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="eg: myname123@mail.com"
          />
          <br />
           <TextField
           onChange={this.nameHandler}
          id="standard-password-input"
          name="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Password"
          />
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button 
                type='submit' 
                onClick={this.signInClickHandler}
                variant="contained" 
                color="primary" 
                className={classes.button}>
                SignIn
                </Button>

                <Button 
                type='submit' 
                onClick={this.signUpClickHandler}
                variant="contained" 
                color="primary" 
                className={classes.button}>
                SignUp
                </Button>
                </CardActions>
            </Card>
            </div>
        )
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);