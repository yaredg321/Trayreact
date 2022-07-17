// import { withRouter } from 'react-router-dom';

// function Navigation(history) {
//   const abc = path => {
//     history.push(path);
//   };

// return(
// <button onClick={() => abc('/user')}>User</button>
// );}

// export default withRouter(Navigation);





import { useState, useEffect} from "react";
import axios from "axios"
import React from "react"
const Checkout = ()=>{
    const [checkouts, setCheckout] = useState([])
    
    const getCart = (e)=>{
     
       
            axios({
                method: 'get',
                url: 'http://localhost:5000/products/cart/'
                
            }).then(response=>{
                setCheckout(response.data[4].products)
            console.log(response)
               
            })
        
        }
        useEffect(getCart ,[])
        
    
    return(
        <div>
            <h1>shsdg</h1>
            {checkouts.map(ma=>
            <div key={ma.id} >
                <h1>{ma.title}</h1>
                <h1>{ma.id}</h1>
                
                <h2>{ma.price}</h2>
                
            </div>
                )}
        </div>
       
    )

};
export default Checkout;

