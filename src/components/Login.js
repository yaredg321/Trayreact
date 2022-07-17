import { useState } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
//import { useHistory } from "react-router-dom"
//import { NavigateProvider,useHistory } from 'react-use-navigate'
import { useNavigate } from "react-router-dom"

const Logins = () =>{
    const [text, settext] = useState('')
    //const history = useHistory()
    const history = useNavigate()
    
    //  const history = useNavigate ();
    //const history = useHistory()

    const login = e =>{ 
        e.preventDefault()
        console.log( e.target.username.value, e.target.password.value,)
        axios({
            
            method: 'post',
            url: 'http://localhost:5000/login',
            data:{
                username: e.target.username.value,
                password: e.target.password.value
                
            }
        }).then(r => {
            console.log(r.data)
            console.log(' full')
            if(r.data.success){
                console.log('success full' )
                localStorage.setItem('myToken', r.data.token)
                localStorage.setItem('userId', r.data.user.username)
                console.log(r.data.user)
               
                // history.push("/MyAccount");
                history("/products")
                

            }else{
                console.log("data is not success")
                settext('error')
            }

        })

    }
    return(
        <>
        <form onSubmit={login}>
            <input type={'text'}   placeholder='username' name='username'/>
        
            <input type={'password'} name='password'/>
            <input type={"submit"}/>
            <h1>{text}</h1>
        </form>
        </>
    )
}

export default Logins