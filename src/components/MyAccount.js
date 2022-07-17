import axios from 'axios'
import {useEffect, useState} from 'react'

const MyAccount = () => {
    const [user, setUser] = useState({})

    const fetchAccount = () => {
        const token = localStorage.getItem('myToken')
        axios({
            method: 'get',
            url: 'http://localhost:5000/myAccount',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(r => {
            if(r.data.success){
                console.log(r.data)
                setUser(r.data.info)
                // setUser(true)


            } else { 
                
            }
        })
    }

    useEffect(fetchAccount, [])

    return (
        
        <>
        <p>first name: {user.first_name}</p>
        <p>{user.username}</p>
             
        </>
        
    )

}




export default MyAccount
