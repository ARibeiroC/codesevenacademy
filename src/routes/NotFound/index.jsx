// NATIVE HOOKS REACT IMPORT
import { useEffect } from 'react'

// HOOKS REACT-ROUTER-DOM IMPORT
import { useNavigate } from 'react-router-dom'

// STYLES IMPORT
import { Container } from './styles'

export function ErrorPage(){

    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/cfi')
        },6000)
    },[])

    return (
        <Container>
            <h1>Ops!!! Ocorreu um problema.</h1>
            <h2>Error: 404</h2>
            <p>Not Found Page</p>
            <p>Redirect you for homepage</p>
        </Container>
    )
}