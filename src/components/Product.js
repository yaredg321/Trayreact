import { useState, useEffect} from "react";
import axios from "axios"
import React from "react"
// import { useNavigate } from 'react-router-dom';


//add to cart 
//image add 
// papal account 
//checkout page min endemiyaderigi bedemib eyiki medemerun abazatun minamin cherise
//router


const Products = () =>{

     // const history = useNavigate ();
   
    const [datastor, setDatastor] = useState([])
    const [title, settitle] = useState([])
    const [update, setUpdate] = useState([])
    const [price, setprice] = useState([])
  //  const [image, setimage] = useState([])

    const [search, setserche] = useState([])
    const [filter, setfilter] = useState([])
    const [num, setnum] = useState(0)

    const [checkouts, setCheckout] = useState([])
  


  
     const get = (e)=>{
        const token = localStorage.getItem('myToken')
    //    e.preventDefault()
        axios({
            method: 'get',
            url: 'http://localhost:5000/products/',
            
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response=>{
            setDatastor(response.data)//login yaderegewin sew yeminagegnbet
            console.log(response)
            //   setDatastor(response.data[1].products)
            // console.log(response.data[1].products)
            datastor.sort()//is object
        })
    
    }
    useEffect(get ,[])

    
      
        
        const getCart = (e)=>{
            const token = localStorage.getItem('myToken')
         //   const userId = localStorage.getItem('userId')

                axios({
                    method: 'get',
                    url: 'http://localhost:5000/products/cart/',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                    
                }).then(response=>{
                    setCheckout(response.data[0].products)
                console.log(response.data[0].products)
             
                   
                })
                
              //  console.log(userId)
                
            
            }
            useEffect(getCart ,[])
    
    
 

    const post = e =>{
        e.preventDefault()//le form new yeminitekemew
        axios({
            method: 'post',
            url: 'http://localhost:5000/products/',
            data: {
                title,
                price,
            }
        }).then(()=>{
            setDatastor([...datastor, {title},{price}])//yaya.puss(name:"cmxnbxc")
            
        })
    }


    const deletes = (id) =>{
       
           
        axios({
            method: 'delete',
            url: `http://localhost:5000/products/${id}`
           
        })
        setDatastor(datastor.filter(ma=> {
            return ma.id !== id
        }))//{} ketetekemik
       
    }

    const updates = (id) =>{
        
        axios({
            method: 'patch',
            url: `http://localhost:5000/products/${id}`,
            data:{
                title,
                price
            },
        }).then(()=>{
        setDatastor (ds => {
            return ds.map(ma => {
                if(ma.id == id){
                    ma.title = title
                    ma.price = price
                    return ma
                } return ma
            })
        })
        // title.find(ma => ma.id == id).price = price
        setUpdate("")
       
        })
  
    }
    const serchess = e =>{
        e.preventDefault()
        // setDatastor(datastor.filter(ma => ma.title == search))
        setDatastor(datastor.filter(ma => new RegExp(`${search}`).test(ma.title)))

    }  
    // const image = () =>{

    // }








   
    const cart = (id) =>{
        const token = localStorage.getItem('myToken')
        console.log(id)
        axios({
            method: 'post',
            url: `http://localhost:5000/products/cart/${id}`,
            // data: {
            //     productid: id,
               
            // }
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response)=>{
           console.log(response)
           console.log('sucsse full add ==')
            
        })
       // console.log(token)
    }
    const filters = (datas) =>{
        setfilter(datas.sort((a,b)=>{
            if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;

        }))((data)=>(
            console.log(data)
        )
        )
    }
  

    function viewAdd(){
        let addBox = document.getElementById('addpr')
        let dd = document.getElementById('dd')
        addBox.style.display = 'flex'
        //flex asay none atasay
       
    }
    function view(e){
        let addBox = document.getElementById('addpr')
        e.target.id === 'addpr' &&  (addBox.style.display = 'none')
        console.log("cl")
    }

    // document.getElementById('addlnk').onClick = function(e){
    //     e.preventDefault()
    //     viewAdd()
    // }
    
   
    
    
    return(
        <div id="dd">
            
            <button onClick={viewAdd} id="addlnk">Add_to_cart{num}</button>
        <div id="addprs"  style={{display:"flex" , justifyContent:"flex-end",alignItems:"self-start"}}>

       
        <div id="addpr"  onClick={view}  style={{margin:"0", padding:"0", display:"none",position:"fixed", backgroundColor:"#ccc", color:"black",}}>
        
            <div>
            <h2>this is custemer cart h2agr you add check out h2agr</h2>
           <h2>or delet your choise</h2>
         
        
            {checkouts.map(ma=>
            
            <div  key={ma.id} >
                
                <h1>title: {ma.title}   price: {ma.price}</h1>
                <h2></h2>
                <button onClick={()=>{deletes(ma.id)}}>delete</button>
                
            </div>
                )} 
              
        </div>
        </div>
        </div>
    
        {/* onClick={  //history.push("/Chekout") } */}
        
        <div>
            <form method="post" onSubmit={post}>
            <label>text</label>
            <input
            type= 'text'
            name="title"
            onChange={(e)=>{
                settitle(e.target.value)
            }}
            
            />
             <label>price</label>
            <input
            type= 'number'
            name="price"
           onChange={(e)=>{
               setprice(e.target.value)
           }}
            />
            {/* <input 
            type="file"
            name="image"
            onClick={(e)=>{
                setimage(e.target.value)
            }}
           
             >

             </input> */}
            <input type='submit' />

            </form>
         

            <form form="post" onSubmit={serchess}>
            <input
            type= 'text'
            name="serche"
            placeholder="serche"
           onChange={(e)=>{
               console.log(e)
               setserche(e.target.value)
           }}
          
            />
              <input type='submit' />

            </form>
            {datastor.map(ma=>
            // {} kaderek return adrigew
            <div  key={ma.id}>
            <h1 >{ma.title}</h1>
            <h1>{ma.price}</h1>
            <button onClick={()=>{updates(ma.id)}}>updat</button>
            <button onClick={()=>{deletes(ma.id)}}>delete</button>
            <button onClick={()=>{cart(ma.id)}}>addTo_cart</button>
        </div>
            )}
           

           
         
 <button onClick={()=>{filters(datastor)}}>filterbyTitle</button>
            

            
            
           

        </div>
        </div>
    )
 }
export default Products







//google sencer