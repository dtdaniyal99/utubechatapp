import React from 'react';
import ChatListComponent from '../chatslist/chatlist';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
import ChatViewComponent from '../chatview/chatview';
import ChatTextBoxComponent from '../chatTexBox/chattexbox';
const firebase = require("firebase");

class DashbordComponent extends React.Component{
  constructor(){
    super();
    this.state ={
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    }
  }

    render(){
      const { classes } = this.props;
      return(<div>
      <ChatListComponent history = {this.props.history} 
      newChatBtnFn={this.newChatBtnClicked }
      selectChatFn={this.selectChat}
      chats={this.state.chats}
      userEmail={this.state.email}
      selectChatIndex={this.state.selectedChat}></ChatListComponent>
      {
        this.state.newChatFormVisible?
        null:
        <ChatViewComponent
        user={this.state.email}
        chat={this.state.chats[this.state.selectedChat]}></ChatViewComponent>  
      }
      {
        this.state.selectedChat !== null && !this.state.newChatFormVisible ?
        <ChatTextBoxComponent submitMessageFn={this.submitMessage}></ChatTextBoxComponent> :
        null
      }
      <Button onClick={this.signOut} className={classes.signOutBtn}>Sign Out</Button>  
      </div>)
    };

    signOut = () => firebase.auth().signOut();

    selectChat =(chatIndex)=>{
      console.log('index:',chatIndex)
      this.setState({selectedChat: chatIndex})
    }
    submitMessage= (msg) =>{
      const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0])
      console.log(docKey);
      firebase.firestore().collection('chats').doc(docKey).update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverhasread: false
      })
    }
    buildDocKey = (friend)=>[this.state.email, friend].sort().join(':');

    newChatBtnClicked = () => this.setState({newChatFormVisible: true, selectedChat: null});

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(async _usr => {
        if(!_usr)
          this.props.history.push('/login')
        else{
          await firebase.firestore().collection('chats').where('users','array-contains',_usr.email)
          .onSnapshot(async res =>{
            const chats = res.docs.map(_doc => _doc.data());
            await this.setState({
              email: _usr.email,
              chats : chats
            })
            console.log(this.state);
          })
        }
      })
    }
};

export default withStyles(styles)(DashbordComponent);