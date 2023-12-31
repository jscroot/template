import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
import { url } from "https://jscroot.github.io/template/dc/starter/jscroot/url/config.js";

export function getContentURL(){
    let hashlink=parseInt(getHash());
    switch (hashlink) {
        case 1:
            return url.template.content+"home.html";
        case 21:
            return url.template.content+"profile/passwords.html";
        case 22:
            return url.template.content+"profile/mail.html";
        case 23:
            return url.template.content+"profile/accounts.html";
        case 3:
            return url.template.content+"messages.html";
        case 41:
            return url.template.content+"notifications/blocked.html";
        case 42:
            return url.template.content+"notifications/silenced.html";
        case 43:
            return url.template.content+"notifications/publish.html";
        case 44:
            return url.template.content+"notifications/program.html";
        case 5:
            return url.template.content+"explore.html";
        case 6:
            return url.template.content+"saved.html";
        case 7:
            return url.template.content+"logout.html";
        default:
            return url.template.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=parseInt(getHash());
    switch (hashlink) {
        case 1:
            return url.view.content+"home.js";
        case 21:
            return url.view.content+"profile/passwords.js";
        case 22:
            return url.view.content+"profile/mail.js";
        case 23:
            return url.view.content+"profile/accounts.js";
        case 3:
            return url.view.content+"messages.js";
        case 41:
            return url.view.content+"notifications/blocked.js";
        case 42:
            return url.view.content+"notifications/silenced.js";
        case 43:
            return url.view.content+"notifications/publish.js";
        case 44:
            return url.view.content+"notifications/program.js";
        case 5:
            return url.view.content+"explore.js";
        case 6:
            return url.view.content+"saved.js";
        case 7:
            return url.view.content+"logout.js";
        default:
            return url.view.content+"home.js";
    }

}