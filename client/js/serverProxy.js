import { postData } from "./http.js";

export const server = new Proxy({}, {
    get(_, key) {
        return async (data) => {
            return await postData(`/${key}`, data);
        };
    }
});