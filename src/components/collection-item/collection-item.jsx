import React from 'react';
import './item-style.scss';


const CollectionItem = ({style, name ,price , imageUrl})=>{
    return(<div className='collection-item' style={style} >
        <div className='image' style={
            {backgroundImage: `url(${imageUrl})`}
        }></div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
    </div>)
}

export default CollectionItem;