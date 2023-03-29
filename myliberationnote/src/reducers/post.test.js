import configureStore from "redux-mock-store";

import { posts } from "../fixture/posts";
import { initialState } from "./post";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("post Reducer", () => {
    const store = mockStore(initialState);
    beforeEach(() => {
        const actions = store.getState();
        expect(actions).toEqual(initialState);
    });
    it("init posts", () => {
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
    it("init user & hashtag in post object", () => {
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
                hashtage: [],
            },
        });
        store.dispatch(addPost());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "addPost",
            post: {
                user: [{ id: 1, nickname: "devkim" }],
                hashtage: [],
            },
        });
    });
    it("init state", () => {
        const state = store.getState();
        expect(state).toEqual({
            loadPostDetailLoading: false,
            loadPostDetailFailure: null,
            posts: [],
            post: {
                user: [],
                hashtag: [],
            },
            postscount: undefined,
        });
    });
});
