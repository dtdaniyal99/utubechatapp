import React from 'react';
import {Link} from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles'


class LoginComponent extends React.Component{

  constructor(){
    super()
    this.state={
      email: null,
      password : null,
      loginError: '',
    }
  }

    
    render(){
      const {classes} = this.props;
      return(
        <main className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
              <Typography component='h1' variant = 'h5'>
              Login
              </Typography>
              <form className={classes.form} onSubmit={(e)=>this.submitLogin(e)}>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
                  <Input autoComplete='email'autoFocus id='login-email-input' onChange={(e)=>this.userTyping("email",e)}></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='login-password-input'>Enter Your Email</InputLabel>
                  <Input type = 'password' id='login-password-input' onChange={(e)=>this.userTyping("password",e)}></Input>
                </FormControl>
                <Button type='submit'fullWidth variant='contained' color='primary' className={classes.submit}>Log In</Button>
              </form>
              {
                this.state.loginError?
                <Typography component='h5' variant='h6' className={classes.errorText}>
                  Incorrect Login Information
                </Typography>:
                null
              }
              <Typography component='h5' variant='h6'className={classes.noAccountHeader}>Don't Have An Account</Typography>
              <Link className={classes.signUpLink} to='/singup'>Singn Up</Link>

            </Paper>

        </main>
      );
    };
    userTyping = (type,e) =>{
      switch (type) {
        case 'email':
          this.setState({email: e.target.value})
          break;

          case 'password':
              this.setState({password: e.target.value})
              break;
      
        default:
          break;
      }
    }

    submitLogin = (e) =>{
      e.preventDefault();
      console.log('Submitting', this.state)
    }
};

export default withStyles(styles)(LoginComponent);