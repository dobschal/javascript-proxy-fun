/**
 * Send a HTTP Post request to the server.
 * @param {string} url 
 * @param {any} data 
 * @returns {any} - Server response
 */
export async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response.json();
}