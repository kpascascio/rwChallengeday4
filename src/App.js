import React, { Component } from 'react';
import './App.css';

//  Class Components 
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

// Functional Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

class App extends Component {
  constructor(){
    super(); 

    this.state = {
      isUser: false
    }
  }

  changeUserStatus = () => {
    this.setState({isUser: !this.state.isUser})
  }

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        <Login toggleForm={this.changeUserStatus}/>
      )
    } else {
      return(
        <Signup toggleForm={this.changeUserStatus}/>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar />
          {this.authViewShow()}
        <Footer />
      </div>
    );
  }
}

export default App;
