class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        user:{},
      }
    }
    componentDidMount =() =>{
      this.authListener();
    }
  
    authListener() {
      fire.auth().onAuthStateChanged((user)=> {
        if(user){
          this.setState({user : null});
      }  
      })
    }
    render() {
      return (
          a
    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
          //get iserod frp, firebase signup with email and password
          //https://firebase.google.com/docs/auth/web/password-auth?authuser=0
          //https://console.firebase.google.com/project/bloodbank3512/authentication/providers
          

          //https://blood-bank-webapp.firebaseapp.com/dashboard
           // {this.state.user ? (<Home />) : (<LogIn />)}
      );
    }
  }
  