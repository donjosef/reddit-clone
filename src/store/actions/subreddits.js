import subredditsReducer from "../reducers/subredditsReducer"

export const setSubreddits = (subreddits) => {
    return {
        type: 'SET_SUBREDDITS',
        subreddits
    }
}