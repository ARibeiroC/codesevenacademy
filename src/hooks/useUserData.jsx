export function useUserData(){

    const user = localStorage.getItem('user')

    if (user !== null){
        const nameUser = user.split(' ')    
        const id = localStorage.getItem('_id')
        return [nameUser[0], id]
    } else {
        return ['usuário não encontrado', undefined]
    }
}