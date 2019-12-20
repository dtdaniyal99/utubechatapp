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
import styles from './styles';
import EmailIcon from '@material-ui/icons/Email';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { typography } from '@material-ui/system';
const firebase = require('firebase');

class SingupComponent extends React.Component{
    render(){
      const { classes } = this.props;
      return(
        <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
        <Typography component = "h1" variant = 'h5'>
          Sign Up!
        </Typography>
        <form onSubmit={(e)=>this.submitsignup(e)} className={classes.form}>
          <FormControl required fullWidth margin = 'normal'>
          <InputLabel htmlFor = 'signup-email-input'>Enter your email</InputLabel>
          <Input autoComplete='email' onChange={(e)=> this.userTyping('email',e)} autoFocus id ='signup-email-input'></Input>
          </FormControl>
          <FormControl required fullWidth margin = "normal">
            <InputLabel htmlFor='signup-password-input'>Create A Password</InputLabel>
            <Input type="password" onChange={(e)=> this.userTyping('password',e)} id ='signup-password-input'></Input>
          </FormControl>
          <FormControl required fullWidth margin = "normal">
            <InputLabel htmlFor='signup-password-confirmation-input'>Create A Password</InputLabel>
            <Input type="password" onChange={(e)=> this.userTyping('passwordCondirmation',e)} id ='signup-password-confirmation-input'></Input>
          </FormControl>
          <Button type = 'submit' fullWidth variant = 'contained' color ='primary' className={classes.submit}>Submit</Button>
          </form>
          <Typography component='h5' variant='h6' className={classes.hasAccountHeader}>Already have An Account?</Typography>
          <Link className={classes.loginLink} to='/login'>Login</Link>
        </Paper>

        </main>
      )
    };
    userTyping = (type,e) => {
      console.log(type,e);
    }

    submitsignup = (e) => {
      console.log('Submitting');
    }
};

export default withStyles(styles) (SingupComponent);