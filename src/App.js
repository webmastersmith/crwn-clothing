import React from 'react'

//page routes
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUP from './pages/sign-in-sign-up/sign-in-and-sign-up.component'

//redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  // unsubscribeFromAuth = null

  componentDidMount() {
    // const { setCurrentUser } = this.props
    // the google sign in button returns an auth object -userAuth.
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   // add them to firestore data base.
    //   // userAuth becomes null if logged out.
    //   if (userAuth) {
    //     //check if in firestore, if not add them, then return userRef object (provides access into the firestore/users collection).
    //     const userRef = await createUserProfileDocument(userAuth)
    //     //calls a listener and adds user to local state once in firestore, if sign-in changes, state will reflect that.  Like two different accounts log in on the same machine.
    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       }) //end setState()
    //     }) //end onSnapshot
    //   } //end if
    //   // if userAuth empty value will be null
    //   setCurrentUser(userAuth)
    // }) //end onAuthStateChanged()
  } //end componentDidMount()

  componentWillUnmount() {
    //call the function to unmount
    // this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUP />
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(App)
