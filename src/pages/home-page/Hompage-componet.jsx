import React from 'react';
import './HomePage-style.scss'
import Directory from '../../components/directory/directory-component';


const HomePage = (props)=>{
console.log("🚀 ~ file: Hompage-componet.jsx ~ line 7 ~ HomePage ~ props", props)
    return(
        <div className="homepage">
            <Directory/>
        </div>
    )
}
export default HomePage;