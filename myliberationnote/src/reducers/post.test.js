import configureStore from "redux-mock-store";

import { posts } from "../fixture/posts";
import { initialState } from "./post";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);
describe("post Reducer", () => {
    beforeEach(() => {
        const actions = store.getState();
        expect(actions).toEqual(initialState);
    });
    it("inits state", () => {
        const state = store.getState();
        expect(state).toEqual({
            loadPostDetailLoading: false,
            loadPostDetailFailure: false,
            posts: [],
            post: {
                user: [],
                hashtag: [],
            },
            postscount: undefined,
        });
    });
    it("inits posts", () => {
        const addPost = () => ({
            type: "addPost",
            posts,
        });
        store.dispatch(addPost());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "addPost",
            posts,
        });
    });
    it("inits user & hashtag in post object", () => {
        const initialState = {
            post: {
                user: [],
                hashtag: [],
            },
        };
        const store = mockStore(initialState);
        const addPost = () => ({
            type: "addPost",
            post: {
                user: [{ id: 1, nickname: "devkim" }],
                hashtag: [],
            },
        });
        store.dispatch(addPost());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "addPost",
            post: {
                user: [{ id: 1, nickname: "devkim" }],
                hashtag: [],
            },
        });
    });
});
