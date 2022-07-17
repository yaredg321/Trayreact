import axios from 'axios'
import {useEffect, useState} from 'react'
const logins = () =>{


const login = () =>{
    const [text, settext] = useState([])

    const history = usehitory
    const loogins = e =>{
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost/3001/login',
            dat:{
                username: e.target.usernamr.value,
                password: e.arget.password.value

            }
        }).then(r =>{
            if(r.data.success){
                localStorage.setItem('myToken', r.dat.token)
                localStorage.setItem('myuser', r.dat.userId)
                // history.push('/login')
                

            }else{
                settext(' error')
            }

        })

    }
    
}

   

    const fetchAccount = () => {
        const [user, setUser] = useState({})
        const token = localStorage.getItem('login_token')
        axios({
            method: 'get',
            url: 'http://localhost:3001/my-account',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(r => {
            if(r.data.success){
                console.log(r.data)
                setUser(r.data.info)
           

            } else { 
                
            }
        })
    }




    const Signup = () =>{
        const [text, settext] = useState
        const history = useHistory
        
        const signinn = (e) =>{
            e.preventDefault()
            axios({
                method: 'post',
                url:'http://localhost/3001/sinup',
                data:{
                    username: e.target.username.value,
                    password: e.target.password.value
                }
            }).then(r=>{
                if(r.data.success){
                    history.push('/login')
                }else{
                    settext('etgte')
                }
            })
        }
    
    
    
    
    
     
    }







    
        return(
            <>
             <>
            <form onSubmit={Signup}>
                <input type={text} placeholder='Signup' name='username'/>
                <input type={password} name='password'/>
                <input type={submit}/>
    
            </form>
            <p>{text}</p>
            </>

            <form onSubmit={login}>
                <input type={text} placeholder='login' name='username'/>
            
                <input type={password} name='password'/>
                <input type={submit}/>
            </form>
            </>
        )
}

   