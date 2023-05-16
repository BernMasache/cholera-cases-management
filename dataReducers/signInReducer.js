export const INITIAL_STATE = {
    loading: false,
    username: "",
    password: "",
    error: false
}

export const signInUserReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case "LOGIN_START":
            return {
                loading: true,
                error: false,
                user: {}
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case "LOGIN_ERROR":
            return {
                loading: false,
                error: true,
                user: {}
            };
        default:
            return state
    }
}