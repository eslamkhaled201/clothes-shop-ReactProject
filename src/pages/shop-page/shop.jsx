import React from 'react';
import './shop-style.scss';
import {SHOP_DATA} from './shop-data';
import PreviewCollection from '../../components/collection-preview/preview-collection';
class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA,
        } 
    }
    render(){
        return(       
            <div>
                <h2 className='tittle mb-5'>COLLECTIONS</h2>
                {
                    this.state.collections.map(({id , ...otherData})=>  (
                        <PreviewCollection  key={id} {...otherData} />))
                }
            </div>
        )
    }
}
export default Shop;