interface request<T> {
    [fetchName: string]: T;
}
const requests: request<string> = {
    fetchAuth: "user",
    fetchHashtag: "hashtag",
};

export default requests;
