import React from 'react'
import './menu-item.styles.scss'

export const MenuItem = ({title, imgUrl, size}) => (
    <div className={size ? `${size} menu-item` : `menu-item`} >
        <div className="background-image" style={{backgroundImage: `url(${imgUrl})`}} ></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{'Shop Now'.toUpperCase()}</span>
        </div>
    </div>

)