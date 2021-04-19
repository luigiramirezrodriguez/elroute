import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components'; 
import Header from './components/header/header.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component { 
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      
      setCurrentUser(userAuth);
    });
  }

  
  componentWillUnamount() {
    this.unsubscribeFromAuth();
  }



  render(){
    return(
      <div>
        {/* <Header currentUser={this.state.currentUser}></Header> */}

      
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUpPage} />
        </Switch>
      </div>
    );
  }

}


const mapDispachToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispachToProps)(App);
