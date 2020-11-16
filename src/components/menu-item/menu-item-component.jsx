import React from 'react';
import './menu-item-style.scss'
import {withRouter} from 'react-router-dom'

const MenuItems = ({title , imageUrl ,linkUrl ,history,match}) => (
    <div  className="item" 
        onClick={()=> history.push(`${match.url}${linkUrl}`) }>
         <div 
            style={
                {backgroundImage:`url(${imageUrl})`,
                color: `red`}
            }
            className="background"/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)
export default withRouter(MenuItems);