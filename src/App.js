import React from 'react';
import './App.css';
import HomePage from './pages/home-page/Hompage-componet';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Shop from './pages/shop-page/shop';
import { SignInSignUpPage } from './pages/signIn-sign-up-page/signIn-sign-up';


class App extends React.Component {
  constructor({ location }) {
    const mainPath = location.pathname;
    super();
    this.state = {
      currentUser: null,
      mainPath: mainPath
    }

  }


  render() {
    return (
      <div className="App ">

        <div className='main'>
          <Route exact={false} path="/" >
            <NavBar currentUser={this.state.currentUser} mainPath={this.state.mainPath} />
          </Route>
          <Route exact path={`${this.state.mainPath}`}  ><HomePage /> </Route>
          <Switch>
            <Route exact path={`${this.state.mainPath}shop`} params={1} component={Shop} />
            <Route exact path={`${this.state.mainPath}logIn`} ><SignInSignUpPage /> </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
