export const initialState = {
    news: [],
};
export const GET_NEWS = "GET_NEWS";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                news: action.payload,
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default reducer;
