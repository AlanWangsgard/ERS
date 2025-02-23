export default function getUser(){

const user = sessionStorage.getItem('user')
    const u = JSON.parse(user || '{}')
    return u
}
