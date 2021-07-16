import React from 'react'
import { Route } from 'react-router-dom'

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'

import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import CollectionPage from '../collection/collection.component'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    //initialize object
    const collectionRef = firestore.collection('collections')
    //get initial collectionRef object.
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapShot)
        console.log('collectionsMap', collectionsMap)
      }
    )
  }

  componentWillUnmount() {
    //removes listener from database.
    this.unsubscribeFromSnapshot()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

export default ShopPage
