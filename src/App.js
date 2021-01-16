import React from 'react';
import './App.css';
import HomePage from './pages/home-page/Hompage-componet';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Shop from './pages/shop-page/shop';
import { SignInSignUpPage } from './pages/signIn-sign-up-page/signIn-sign-up';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
    console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ constructor ~ props", props)

  }

  
  render() {
    return (
      <div className="App ">
        <NavBar currentUser={this.state.currentUser}></NavBar>
        <div className='main'>
        <Route exact path="/" component={HomePage} />

          <Switch>
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/logIn" component={SignInSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
