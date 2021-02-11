export const authSuccess = (user) => {
    return {
        type: 'AUTH_SUCCESS',
        user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}
