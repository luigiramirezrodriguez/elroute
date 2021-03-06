import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components'; 
import CheckoutPage from './pages/checkout/checkout.components';
import Header from './components/header/header.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

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
          <Route exact path='/checkout' component={CheckoutPage} />
          
          <Route 
            exact 
            path='/signin' 
            render={() => 
              this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
              <SignInandSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }

}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispachToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(
  mapStateToProps, 
  mapDispachToProps
)(App);
