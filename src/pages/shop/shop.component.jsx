import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopItems } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({ shopItems }) => (
  <div>
    {shopItems.map(({ id, ...otherCollections }) => (
      <CollectionPreview key={id} {...otherCollections} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopItems,
})

export default connect(mapStateToProps)(ShopPage)
