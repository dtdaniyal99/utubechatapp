import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from "react-router-dom";
import LoginComponent from './component/login/login';
import SingupComponent from './component/singup/singup';
import DashbordComponent from './component/dashbord/dashbord';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCYEvXhCQq9phzS1Y7wHsdlsLh_6EMnqlE",
    authDomain: "utubechatapp.firebaseapp.com",
    databaseURL: "https://utubechatapp.firebaseio.com",
    projectId: "utubechatapp",
    storageBucket: "utubechatapp.appspot.com",
    messagingSenderId: "581271495675",
    appId: "1:581271495675:web:77a96cbb7a626fb64ce15e",
    measurementId: "G-STHBEKS0JN"
});

const routing = (
    <Router>
        <div id='Routing-container'>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/singup" component={SingupComponent}></Route>
            <Route path="/dashbord" component={DashbordComponent}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
>>>>>>> 87608897e65e3b69ed22bc57ae5079323f43236f

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
