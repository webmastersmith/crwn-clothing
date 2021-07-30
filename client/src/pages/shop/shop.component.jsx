import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../collection/collection.container'

function ShopPage({ fetchCollectionsStart, match }) {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  )
}

const dispatchStateToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})
export default connect(null, dispatchStateToProps)(ShopPage)
