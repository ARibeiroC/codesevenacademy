import {API_KEY, API_URL, APP_ID, headers} from './conexao.js'


function createDatacandidate (data){
    const [matricula, nomeCandidato, emailCandidato, celularCandidato, nomeResponsavel, celularResponsavel] = data

    const dataCandidate = {
        registerCandidate: matricula,
        nameComplete: nomeCandidato,
        emailCandidate: emailCandidato,
        telephoneCandidate: celularCandidato,
        nameResponsible: nomeResponsavel,
        cellphoneResponsible: celularResponsavel,
        passwordCandidate: '123'
    }

    signUp(dataCandidate)
}

async function signUp(data) {

    let POST = `${API_URL}/tabUsers`
    const res = await fetch(POST, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    return window.open('/confirmCad.html', "_Self")
}

async function getAllCandidate() {
    const GET = `${API_URL}/tabUsers`
    return await fetch(GET, {
        headers: {'Content-type': 'application/json', 
        "X-Parse-REST-API-Key": API_KEY, 
        "X-Parse-Application-Id": APP_ID
        },
    }).then(response => response.json())
};


export { getAllCandidate, createDatacandidate }
