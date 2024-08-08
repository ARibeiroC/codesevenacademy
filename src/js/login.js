import { getAllCandidate } from './register.js'


function token(length){
    const buffer = new Uint16Array(length)
    window.crypto.getRandomValues(buffer)
    return Array.from(buffer, (byte)=> byte.toString(32)).join('')
}

function authUser(){
    const urlArray = window.location.href

    const endPoint = urlArray.split('/')

    if (endPoint[3] === 'home.html'){
    }
    
    switch (endPoint[3]) {
        case 'home.html':
            if (localStorage.getItem('token') === null){
                document.querySelector('body').classList.add('hide')
                window.open('/index.html', "_Self")
            } {
                document.querySelector('body').classList.remove('hide')
            }
            break

        case 'confirmCad.html':
            setTimeout(()=>{
                window.open('/index.html', "_Self")
            }, 5000)
        break
    }
}

async function signIn(data){
    getAllCandidate()
    .then( (bdUsers) => {
        const dataframe = bdUsers.results
        const users = []
        data.forEach(field => {
            users.push(field.value)
        })
        for (let i=0; i < dataframe.length; i++){
            if (dataframe[i].registerCandidate === users[0] && dataframe[i].passwordCandidate === users[1]){
                localStorage.setItem('token', token(8))
                localStorage.setItem('user', JSON.stringify({user: dataframe[i].nameComplete}))
                window.open('/home.html')
            }
        }
    })
}

export { signIn, authUser }
