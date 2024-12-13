import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectedWrapper = ({children}) => {
    const {captain,setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    useEffect(()=>{
        if(!token){
         navigate('/captain-login')
        }
    },[token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        
            headers:{
                Authorization: `Bearer ${token}`
            }
        
    }).then((response)=>{
        if(response.status === 200){
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    }).catch((error)=>{
        console.log(error)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })

    if(isLoading){
        return(
            <div> isLoading...</div>
        )
    }
  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper