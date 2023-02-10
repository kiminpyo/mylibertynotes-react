export const initialState = {
    posts: [],
    post: {
        user: [],
        hashtag: [],
    },
    postscount: undefined,
};

export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POST_DETAIL = "LOAD_POST_DETAIL";
export const LOAD_POST_DETAIL_SUCCESS = "LOAD_POST_DETAIL_SUCCESS";
export const LOAD_MY_CONTENT = "LOAD_MY_CONTENT";
export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_POST_SUCCESS: {
            console.log(action.data);
            return {
                ...state,
                posts: [action.data, ...state.posts],
            };
        }
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                posts: state.posts.concat(action.data.rows),
                postscount: action.data.count,
            };
        }
        case LOAD_POST_DETAIL_SUCCESS: {
            return {
                ...state,
                post: action.data,
                user: action.data.User,
            };
        }
        case LOAD_MY_CONTENT: {
            return {
                ...state,
            };
        }
        case EDIT_POST_SUCCESS: {
            console.log(action.data);
            return {
                ...state,
            };
        }
        case DELETE_POST_SUCCESS: {
            return {
                ...state,
                posts: state.posts.filter((v) => v.id !== action.data.PostId),
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
