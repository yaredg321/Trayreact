//refur error malet alagegnhutim malet new
import axios from 'axios'
import React, {useState} from 'react'

 import { useNavigate  } from 'react-router-dom' 
 // import axios from 'axios'
 //import React,{useState} from 'react'
 //impot {useNavigate} from 'react-router-dom'


 const Signup = () => {
    const [message, setMessage] = useState('')
     const navigate  = useNavigate ();
   

    const signupRequest = async e => {
        e.preventDefault()
        // console.log('==========================')
        axios({
           
            method: 'post',
            url: 'http://localhost:5000',
            data: {
                username: e.target.username.value,
                password: e.target.password.value,
                first_name: e.target.first_name.value
            }
          
        }).then(r  => {
            
            // console.log('sff,ms ===========================', r.data)
            if(r.data.success){
                console.log("succsee full ade");
                navigate("/Login");
                
              
                // history.goBack()
                

            } else {
                setMessage('error occeured')
            }
        })
    }
    return (
        <form onSubmit={signupRequest}>
            <input type={'text'} name='username' placeholder='username' />
            <input type={'password'} name='password' placeholder='password' />
            <input type={'text'} name='first_name' placeholder='first name' />
            <input type={'submit'} />

            <p>{message}</p>
            
        </form>
    )
}

export default Signup