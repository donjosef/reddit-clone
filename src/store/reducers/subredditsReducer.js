const initialState = []

const subredditsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SUBREDDITS':
            return action.subreddits
        default:
            return state
    }
}

export default subredditsReducer