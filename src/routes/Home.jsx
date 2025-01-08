// LIBS IMPORT
import { Outlet } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { Container } from '../css/HomeCSS'

// COMPONENTS IMPORT
import { SideMenu } from '../components/SideMenu'


// HOOKS IMPORT
import { useAuthLoginConnected } from '../hooks/useAuthUserConnected'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function Home(){

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        const isConnected = useAuthLoginConnected()
        const URL = window.location.pathname
        if (!isConnected){
            if (URL === `/cfi/area-do-candidato/${id}`){
                console.log('Acesso restrito, favor logar')
                navigate('/cfi/auth-error')
            }
            navigate('/cfi/auth-error')
            console.log('Não existe nenhuma autenticação anterior, favor logar novamente')
        }
    },[])
    
    return (
        <Container>
            <SideMenu />
            <Outlet />
        </Container>
    )
}