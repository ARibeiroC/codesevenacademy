// COMPONENT IMPORT
import { Button } from '../Button'

// STYLED COMPONENTS IMPORT
import {Container, FormStyled} from './styles'

// NATIVE HOOKS IMPORT
import { useEffect, useState, useRef } from "react"

// CUSTOM HOOKS IMPORT
import { useNavigate } from 'react-router-dom'
import { useMaskPhoneNumber } from "../../hooks/useMasks"
import { useFetch } from "../../hooks/useFetch"
import { useValidate } from '../../hooks/useValidate'


export function Register(){
    
    // STATEs
    const [candidate, setCandidate] = useState([])
    const [pending, setPending] = useState(false)
    const [registerCandidate, setRegisterCandidate] = useState('')
    const [nameComplete, setNameComplete] = useState('')
    const [emailCandidate, setEmailCandidate] = useState('')
    const [telephoneCandidate, setTelephoneCandidate] = useState('')
    const [nameResponsible, setNameResponsible] = useState('')
    const [cellphoneResponsible, setcellphoneResponsible] = useState('')



    // REFERENCIA DE INPUTS
    const registerCand = useRef()
    const nameComp = useRef()
    const emailCand = useRef()
    const telephoneCand = useRef()
    const nameResp = useRef()
    const cellphoneResp = useRef()


    // IMPLEMENTAÇÃO DE HOOKS
    const { validateInputNumber, validateInputText } = useValidate()
    const uri = import.meta.env.VITE_API_URL
    const { postData, loading } = useFetch(`${uri}/candidates`)
    const navigate = useNavigate()
    
    // FUNÇÕES
    const handleSubmit = (e)=>{        
        e.preventDefault()
        
        const formDatas = new FormData(e.target)
        const data = Object.fromEntries(formDatas)

        data['passwordCandidate'] = "123"

        setPending(true)

        setTimeout(()=>{
            setCandidate(data)
        }, 2000)
    }

    const onChangeRegisterCandidate = (input)=>{
        const update = validateInputNumber(input)
        setRegisterCandidate(update)
    }

    const onChangeInputTelephoneCandidate = (input)=>{
        let update = validateInputNumber(input)
        setTelephoneCandidate(update)
        if (input.length === 11){
            update = useMaskPhoneNumber(update)
            setTelephoneCandidate(update)
        }
    }

    const onChangeInputPhoneNumberResponsable = (input)=>{
        let update = validateInputNumber(input)
        setcellphoneResponsible(update)
        if (input.length === 11){
            update = useMaskPhoneNumber(update)
            setcellphoneResponsible(update)
        }
    }

    const onChangeInputsName = (input)=> {
        const textInput = input.value
        const update = validateInputText(textInput)
        if (input.id === 'name-candidate'){
            setNameComplete(update)
        } else if (input.id === 'name-reponsible'){
            setNameResponsible(update)
        }
    }

    const redirectPage = ()=>{
        navigate('/cfi/confirmed-register')
    }

    // USE EFFECTS HOOCK 
    useEffect(()=>{
        if (candidate.length !== 0){
            postData(candidate, "POST")
            setPending(false)
            setTimeout(()=>{
                redirectPage()
            }, 1000)
        }
    }, [candidate])

    return (
        <Container>
            <h2>Register</h2>
            <FormStyled onSubmit={handleSubmit}>
                {/* <label>
                    <span>Matricula</span>
                </label> */}
                <input
                    name="registerCandidate"
                    type="text" 
                    placeholder="Matricula"
                    value={registerCandidate}
                    onChange={(e)=>{onChangeRegisterCandidate(e.target.value)}}
                    maxLength={6}
                    ref={registerCand}
                    required
                />
                {/* <label>
                    <span>Nome Completo</span>
                </label> */}
                <input
                    name="nameComplete"
                    id='name-candidate'
                    type="text"
                    placeholder="Nome Completo" 
                    value={nameComplete}
                    onChange={(e)=>{onChangeInputsName(e.target)}}
                    ref={nameComp}
                    required
                />
                {/* <label>
                    <span>E-mail</span>
                </label> */}
                <input
                    name="emailCandidate"
                    type="email"
                    placeholder="E-Mail"
                    value={emailCandidate}
                    onChange={(e)=>{setEmailCandidate(e.target.value)}}
                    ref={emailCand}
                    required
                />
                {/* <label>
                    <span>Celular de Candidato</span>
                </label> */}
                <input
                    name="telephoneCandidate"
                    type="text"
                    placeholder="Telefone"
                    value={telephoneCandidate}
                    maxLength={15}
                    minLength={11}
                    onChange={(e)=>{onChangeInputTelephoneCandidate(e.target.value)}}
                    ref={telephoneCand}    
                    required
                />
                {/* <label>
                    <span>Nome do Responsável</span>
                </label> */}
                <input
                    name="nameResponsible"
                    id='name-reponsible'
                    type="text"
                    placeholder="Nome completo do responsável"
                    value={nameResponsible}
                    onChange={(e)=>{onChangeInputsName(e.target)}}
                    ref={nameResp}
                    required
                />
                {/* <label>
                    <span>Celular do Responsável</span>
                </label> */}
                <input
                    name="cellphoneResponsible"
                    type="text"
                    placeholder="Telefone do responsável"
                    value={cellphoneResponsible}
                    maxLength={15}
                    minLength={11}
                    onChange={(e)=>{onChangeInputPhoneNumberResponsable(e.target.value)}}
                    ref={cellphoneResp}
                    required
                />
                {pending ? (
                    <Button wait={true} />
                ) : (
                    <Button text={"Candidatar-se"} />
                )}
            </FormStyled>
        </Container>
    )
}