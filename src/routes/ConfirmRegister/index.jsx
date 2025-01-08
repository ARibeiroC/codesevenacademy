// STYLE CSS
import { useEffect } from 'react'
import './styles.js'


// Hook
import { useNavigate } from "react-router-dom"
import {Container} from './styles.js'

export function ConfirmRegister(){
    const navigate = useNavigate()
    
    useEffect(()=>{
        setTimeout(() => {
            navigate("/")
        }, 5000);
    },[])

    return (
        <Container>
            <h1>Sucesso!!!</h1>
            <h4>Seu cadastro foi realizado!!!</h4>
            <p>Aguarde... Estamos lhe redirecionando.</p>
        </Container>
    )
}