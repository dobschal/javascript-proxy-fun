# Fun with JavaScript Proxy

Example implementation on how to use the JavaScript Proxy class.

Take a look into the `client/serverProxy.js` file:

```javascript
import { postData } from "./http.js";

export const server = new Proxy({}, {
    get(_, key) {
        return async (data) => {
            return await postData(`/${key}`, data);
        };
    }
});
```

Instead of making a HTTP request to the server directly, we put a Proxy instance in between. This instance maps all method call to HTTP requests. 

On the server side we map all request controllers, so that we can easily call them from the client side:
```javascript
const api = require("./api.js");
const app = express();

Object.keys(api).forEach(methodName => {
    app.post(`/${methodName}`, api[methodName]);
});
```

The result looks like:
```javascript
// client.js loaded inot index.html
let username = "Aurelia";
await server.saveUsername(username);

// server.js (e.g. NodeJS)
const api = {
    saveUsername(req, res) {
        // ...update username from req.body in database
        res.send({
            message: `Updated username '${req.body}'.`
        });
    }
};
```