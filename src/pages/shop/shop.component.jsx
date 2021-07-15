import { render } from '@testing-library/react'
import React from 'react'
import { Route } from 'react-router-dom'

import { firestore } from '../../firebase/firebase.utils'

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
        console.log('snapShot', snapShot)
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
