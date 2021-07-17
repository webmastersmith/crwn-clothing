import React from 'react'
import { Route } from 'react-router-dom'

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'

//redux
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import CollectionPage from '../collection/collection.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = { isLoading: true }
  // unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    //initialize object
    const collectionRef = firestore.collection('collections')
    //set up listener, get initial collectionRef object.
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    collectionRef.get().then((snapShot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapShot)
      updateCollections(collectionsMap)
      this.setState({ isLoading: false })
    })
  }

  // componentWillUnmount() {
  //   //removes listener from database.
  //   this.unsubscribeFromSnapshot()
  // }

  render() {
    const { match } = this.props
    const { isLoading } = this.state

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    )
  }
}

// const mapStateToProps
const dispatchStateToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})
export default connect(null, dispatchStateToProps)(ShopPage)
