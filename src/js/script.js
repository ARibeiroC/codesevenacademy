import { askChecks, termsAndRules, signUpFields, signInFields } from './elementsHtml.js'
import { createDatacandidate, getAllCandidate } from './register.js'
import { lazyBackground } from './lazyLoadScrollPage.js'
import { menuToggle } from './menuHamb.js'
import { telephoneMask } from './masksInputs.js'
import { validateInputTelephone } from './validateInputs.js'
import { signIn, authUser } from './login.js'

// EVENTS

// ESCUTANDO O CARREGAMENTO DA PÁGINA
document.addEventListener('DOMContentLoaded', ()=>{
    // SISTEMA DE AUTENTICAÇÃO DE USUÁRIO LOGADO!!!
    authUser()
})




// ESCUTANDO O EVENTO DE SCROLL DO MOUSE
document.addEventListener('scroll', (element)=>{
    // FUNÇÃO RESPONSÁVEL POR CARREGAR AS IMAGENS DO SITE APENAS QUANDO ELA APARECER NA VIEW DO CLIENT
    lazyBackground('about-internship', 'application-form')

    // VERIFICANDO A POSIÇÃO DO SCROLL PARA EXIBIT O BOTÃO IR PAR A TOPO
    // if (document.documentElement.scrollTop > 200) {
    //     goToTop.style.opacity = 1
    //     goToTop.style.top = '90vh'
    //     goToTop.style.left = '80vw'
    // } else {
    //     goToTop.style.opacity = 0
    //     goToTop.style.top = '100vh'
    // }
})

// ESCUTANDO TODOS OS EVENTOS DE CLICK NOS ELEMENTOS HTML
document.addEventListener('click', (e)=>{
    const element = e.target
    // menuToggle(e)

    // TROCANDO O FORMULÁRIO DA PÁGINA
    if (element.id === 'cadastrar-se'){
        window.open('/register.html', "_Self")
    }


    if (element.id === 'btn-sign-up'){
        const dataFieldsCandidate = []
        signUpFields.forEach( field => {
            dataFieldsCandidate.push(field.value)
        })
        createDatacandidate(dataFieldsCandidate)
    }

    if (element.id === 'btn-sign-in'){
        signIn(signInFields)
    }

})

document.addEventListener('submit', (e)=>{
    e.preventDefault()
    let candidate = []

    signUpFields.forEach(dtCandidate => {
        let lowerCase = dtCandidate.value
        candidate.push(lowerCase.toLowerCase())
    })

    askChecks.forEach(validData=>{
        let lowerCase = validData.value
        candidate.push(lowerCase.toLowerCase())
    })

    termsAndRules.forEach(checks =>{
        let lowerCase= checks.value
        candidate.push(lowerCase.toLowerCase())
    })
})

document.addEventListener('input', (e)=>{
    const input = e.target

    if (input.id === 'sign-up-telephone-candidate'){
        const updateValue = validateInputTelephone(input.value)
        input.value = updateValue;
    }

    if (input.id === 'sign-up-telephone-responsible'){
        const updateValue = validateInputTelephone(input.value)
        input.value = updateValue;
    }
    
})


document.addEventListener('change', (e)=>{
    const element = e.target
    if (element.id === 'sign-up-telephone-candidate' || element.id === 'sign-up-telephone-responsible') {
        element.value = telephoneMask(element.value)
    }

    // if (element.id === 'sign-in-matricula-candidate'){
    //     getAllCandidate()
    //     .then(data => {
    //         dataframe = data.results
    //         console.log(dataframe)
    //     })
    // }
})
