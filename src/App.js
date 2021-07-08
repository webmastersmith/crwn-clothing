import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUP from './pages/sign-in-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // the google sign in button returns an auth object -userAuth.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // add them to firestore data base.
      // userAuth becomes null if logged out.
      if (userAuth) {
        //check if in firestore, if not add them, then return userRef object (provides access into the firestore/users collection).
        const userRef = await createUserProfileDocument(userAuth)
        //calls a listener and adds user to local state once in firestore, if sign-in changes, state will reflect that.  Like two different accounts log in on the same machine.
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          }) //end setState()
        }) //end onSnapshot
      } //end if
      // if userAuth empty value will be null
      this.setState({ currentUser: userAuth })
    }) //end onAuthStateChanged()
  } //end componentDidMount()

  componentWillUnmount() {
    //call the function to unmount
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUP} />
        </Switch>
      </div>
    )
  }
}

export default App
