import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

export const HomePage = () => {
    // console.log('homepage-props', props)
    return (
        <div className="homepage">
            <Directory />
        </div> //end homepage
    )
}

