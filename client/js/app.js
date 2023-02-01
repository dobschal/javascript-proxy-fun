import { server } from "./serverProxy.js";

createUI();

let username;

/**
 * User wants to save username.
 * @param {SubmitEvent} event 
 */
async function onFormSubmit(event) {
    event.preventDefault();
    console.log("Nice, your name is: ", username);
    const response = await server.log({ username, something: "Else" });
    console.log("Response: ", response);
}

/**
 * User typed username into input field.
 * @param {InputEvent} event
 */
function onNameChanged(event) {
    username = event.target.value;
}

function createUI() {
    document.body.append(createElement({
        tag: "form",
        events: {
            submit: onFormSubmit
        },
        children: [
            createElement({
                tag: "input",
                events: {
                    input: onNameChanged
                },
                attributes: {
                    placeholder: "Enter your usersame"
                }
            }),
            createElement({
                tag: "button",
                text: "Save Username",
                attributes: {
                    type: "submit"
                }
            })
        ]
    }));
}

/**
 * Returns an instance of HTMLElement based on the passed config object.
 * @param {{ tag: string, text: string, attributes: {}, children: Array<HTMLElement>, events: {}}} param0 
 * @returns {HTMLElement}
 */
function createElement({ tag = "div", text, attributes, children, events } = {}) {
    const element = document.createElement(tag);
    if (text) element.innerText = text;
    if (attributes) {
        Object.keys(attributes)
            .forEach(key => element.setAttribute(key, attributes[key]));
    }
    if (Array.isArray(children)) element.append(...children);
    if (events) {
        Object.keys(events)
            .forEach(eventName => element.addEventListener(eventName.toLowerCase(), events[eventName]));
    }
    return element;
}