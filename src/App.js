import React from 'react';
import './App.css';
import HomePage from './pages/home-page/Hompage-componet';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Shop from './pages/shop-page/shop';
import { SignInSignUpPage } from './pages/signIn-sign-up-page/signIn-sign-up';
let URLOrigin = `${location.origin}`;
console.log(location);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  
  render() {
    return (
      <div className="App ">
        <NavBar currentUser={this.state.currentUser}></NavBar>
        <div className='main'>
        
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/logIn" component={SignInSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
