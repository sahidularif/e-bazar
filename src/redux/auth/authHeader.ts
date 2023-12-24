export function authHeader() {
    const jwt = localStorage.getItem("jwt");
    let token = null;
    if (jwt)
        token = JSON.parse(jwt);

    if (token) {
        // console.log(token)
        return { 'Authorization': `Bearer ${token.token}` };
    } else {
        return { 'Authorization': 'null' };
    }
}