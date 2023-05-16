export const INITIAL_STATE = {
    loading: false,
    programData: {},
    error: false
}

export const programReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                loading: true,
                error: false,
                programData: {}
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                programData: action.payload
            };
        case "POST_START":
            return {
                loading: false,
                error: true,
                programData: {}
            };
        case "POST_SUCCESS":
            return {
                loading: false,
                error: true,
                programData: {}
            };
        case "POST_ERROR":
            return {
                loading: false,
                error: true,
                programData: {}
            };
        case "FETCH_ERROR":
            return {
                loading: false,
                error: true,
                programData: {}
            };
        default:
            return state
    }
}