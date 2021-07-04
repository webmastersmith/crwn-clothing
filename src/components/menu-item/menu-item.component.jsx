import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'
import hats from '../../images/hats.jpeg'
import jackets from '../../images/jackets.jpeg'
import sneakers from '../../images/sneakers.jpeg'
import womens from '../../images/womens.jpeg'
import mens from '../../images/mens.jpeg'

const pics = {
    hats,
    jackets,
    sneakers,
    womens,
    mens
}

const MenuItem = ( {title, size, history } ) => (
    <div className={size ? `${size} menu-item` : `menu-item`} onClick={()=>history.push(`/${title}`)}>
        <div className="background-image" style={{backgroundImage: `url(${pics[title]})`}} ></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{'Shop Now'.toUpperCase()}</span>
        </div>
    </div>
)

export default withRouter(MenuItem)