import React from 'react'
import './directory.styles.scss'
import {MenuItem} from '../menu-item/menu-item.component'
import { sections } from './directory.data'

class Directory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({title, imageUrl, id, size}) => <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />)}
            </div>

        )
    }
}

export default Directory