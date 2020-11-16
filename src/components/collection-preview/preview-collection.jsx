import React from 'react';
import './preview-collection-style.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({ title, items }) => {
    var count=0;
    return(<div className='collection-preview '>
        <h3 className='title'>{title}</h3>
        <div className='preview'>
            {
                items.filter((item ,index) => index <4)
                .map(({id , ...otherdata}) =>{ 
                        return(<CollectionItem style={
                            {position: `relative`,
                            animation: `fadeRightIn 1s ease ${count+=0.5}s 1 normal forwards`   
                        }} key={id} {...otherdata}/>)
                    
                 })
            }
        </div>
    </div>
)}
export default PreviewCollection;