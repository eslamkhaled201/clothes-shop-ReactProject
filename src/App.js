import React from 'react';
import './App.css';
import HomePage from './pages/home-page/Hompage-componet';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Shop from './pages/shop-page/shop';
import { SignInSignUpPage } from './pages/signIn-sign-up-page/signIn-sign-up';


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
            <Route exact path='https://eslamkhaled201.github.io/clothes-shop-ReactProject/' component={HomePage} />
            <Route exact path='https://eslamkhaled201.github.io/clothes-shop-ReactProject/shop' component={Shop} />
            <Route exact path='https://eslamkhaled201.github.io/clothes-shop-ReactProject/logIn' component={SignInSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
