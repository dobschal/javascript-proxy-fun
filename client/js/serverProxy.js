import { postData } from "./http.js";

// Server proxy that maps all properties of `server` to return a function
// that calls the server.
//
// Example: server.login(username), would make a HTTP POST request to "login" with data=username
//
export const server = new Proxy({}, {
    get(_, key) {
        return async (data) => {
            return await postData(`/${key}`, data);
        };
    }
});