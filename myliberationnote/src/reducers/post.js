export const initialState = {
    posts: [],
};

export const ADD_POST = "ADD_POST";
export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const addPost = (data) => {
    console.log(data);
    return {
        type: ADD_POST,
        data,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            console.log(action.data);
            return {
                ...state,
                posts: [...state.posts, action.data],
            };
        }
        case LOAD_POSTS_SUCCESS: {
            console.log(action.data);
            return {
                ...state,
                posts: action.data,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
