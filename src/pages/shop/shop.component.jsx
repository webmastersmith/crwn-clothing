import { match } from 'minimatch'
import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import CategoryPage from '../category/category.component'

const ShopPage = ({ match }) => {
  console.log(match.path)
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/`} />
    </div>
  )
}

export default ShopPage
