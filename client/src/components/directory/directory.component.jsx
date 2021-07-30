import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectMainDirectory } from '../../redux/directory/directory.selectors'

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ directory }) => (
  <div className="directory-menu">
    {directory.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  directory: selectMainDirectory,
})

export default connect(mapStateToProps)(Directory)
