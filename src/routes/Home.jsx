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

            // SISTEMA DE VERIFICAÇÃO DE SEGURANÇA PARA IDENTIFICAR POSSIVEIS ATAQUES VIA INJECTION DE ROTAS
            if (URL === `/cfi/area-do-candidato/${id}`){
                navigate('/cfi/auth-error')
            }
            
            navigate('/cfi/auth-error')
        }
    },[])
    
    return (
        <Container>
            <SideMenu />
            <Outlet />
        </Container>
    )
}