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
    render(){
      const {classes} = this.props;
      return(
        <main className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper className={classes.Paper}>
              <Typography component='h1' variant = 'h5'>
              Login
              </Typography>
              <form className={classes.form} onSubmit={(e)=>this.submitLogin(e)}>
                <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor='login-email-input'>Enter your Email;</InputLabel>
                <Input autoComplete='email' autoFocus id = 'login-email-input' onChange={(e)=>this.userTyping(e,'email')}></Input>
                </FormControl>
                <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor='login-password-input'>Enter your Password;</InputLabel>
                <Input type='password' id = 'login-password-input' onChange={(e)=>this.userTyping(e,'password')}></Input>
                </FormControl>
              </form>
            </Paper>

        </main>
      );
    };
    userTyping = (type,e)=>{
      console.log(type,e)
    }


    submitLogin = (e) =>{
      console.log('submitting')
    }
};

export default withStyles(styles)(LoginComponent);