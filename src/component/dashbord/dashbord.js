import React from 'react';
import ChatListComponent from '../chatslist/chatlist'
const firebase = require('firebase');
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
      return(<div>Hellow world from Dashbord
      <ChatListComponent history = {this.props.history} 
      newChatBtnFn={this.newChatBtnClicked }
      selectChatFn={this.selectChat}
      chats={this.state.chats}
      userEmail={this.state.email}
      selectedChatIndex={this.state.selectedChat}></ChatListComponent>  
      </div>)
    };

    selectChat =()=>{
      console.log('slected a chat')
    }

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

export default DashbordComponent;