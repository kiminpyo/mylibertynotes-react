import produce from "../utils/produce";

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
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST: {
                break;
            }
            case ADD_POST_SUCCESS:
                draft.posts.unshift(action.data);
                break;
            case LOAD_POSTS:
                break;
            case LOAD_POSTS_SUCCESS:
                draft.posts = draft.posts.concat(action.data.rows);
                break;

            case LOAD_POST_DETAIL_SUCCESS:
                draft.post = action.data;
                draft.user = action.data.User;
                break;
            case LOAD_MY_CONTENT:
                break;

            case EDIT_POST_SUCCESS: {
                let newPost = state.posts.map((v) => {
                    if (v.id === action.data.pullpost.id) {
                        v = action.data.pullpost;
                    }
                    return v;
                });

                draft.posts = newPost;
                break;
            }
            case DELETE_POST_SUCCESS:
                draft.posts = state.posts.filter(
                    (v) => v.id !== action.data.PostId
                );
                break;
            default: {
                break;
            }
        }
    });
};

export default reducer;
