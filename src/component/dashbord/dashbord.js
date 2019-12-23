import React from 'react';
import ChatListComponent from '../chatslist/chatlist'

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
      userEmail={this.state.email}></ChatListComponent>  
      </div>)
    };

    selectChat =()=>{
      console.log('slected a chat')
    }

    newChatBtnClicked = () =>{
      console.log('new Chat Button Clicked')
    }
};

export default DashbordComponent;