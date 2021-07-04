import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'
import hats from '../../images/hats.png'
import jackets from '../../images/jackets.png'
import sneakers from '../../images/sneakers.png'
import womens from '../../images/womens.png'
import mens from '../../images/mens.png'

const pics = {
    hats,
    jackets,
    sneakers,
    womens,
    mens
}

const MenuItem = ( {title, size, history, linkUrl, match} ) => (
    <div className={size ? `${size} menu-item` : `menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage: `url(${pics[title]})`}} ></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{'Shop Now'.toUpperCase()}</span>
        </div>
    </div>
)

export default withRouter(MenuItem)