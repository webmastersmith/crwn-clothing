import React, { useEffect, lazy, Suspense } from 'react'

//page routes
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/header/header.component'

//redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.action'

import Spinner from './components/spinner/spinner.component'
import GlobalStyle from './global.styles'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUP = lazy(() =>
  import('./pages/sign-in-sign-up/sign-in-and-sign-up.component')
)

function App({ checkUserSession, currentUser }) {
  // unsubscribeFromAuth = null

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUP />
            }
          />
        </Switch>
      </Suspense>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
