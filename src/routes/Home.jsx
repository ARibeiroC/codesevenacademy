// LIBS IMPORT
import { Outlet } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { Container } from '../css/HomeCSS'

// COMPONENTS IMPORT
import { SideMenu } from '../components/SideMenu'


// HOOKS IMPORT
import { useAuthLoginConnected } from '../hooks/useAuthUserConnected'
import { useEffect, useState } from 'react'

export function Home(){
    return (
        <Container>
            <SideMenu />
            <Outlet />
        </Container>
    )
}