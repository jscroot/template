import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
import { url } from "https://jscroot.github.io/template/dc/rooted/jscroot/url/config.js";

export function getContentURL(){
    let hashlink=getHash();
    console.log("link hash:"+hashlink);
    switch (hashlink) {
        case "home":
            return url.template.content+"dashboard/home.html";
        case "dashboard/ecommerce":
            return url.template.content+"dashboard/ecommerce.html";
        case "dashboard/project":
            return url.template.content+"dashboard/project.html";
        case "dashboard/crm":
            return url.template.content+"dashboard/crm.html";
        case "dashboard/banking":
            return url.template.content+"dashboard/banking.html";
        case "about":
            return url.template.content+"about.html";
        case "calander":
            return url.template.content+"calander.html";
        case "chat":
            return url.template.content+"chat.html";
        case "email":
            return url.template.content+"email.html";
        case "kanban":
            return url.template.content+"kanban.html";
        case "todo":
            return url.template.content+"todo.html";
        case "utility/settings":
            return url.template.content+"utility/settings.html";
        case "utility/pricing":
            return url.template.content+"utility/pricing.html";
        default:
            return url.template.content+"dashboard/home.html";
    }

}



export function getURLContentJS(){
    let hashlink=getHash();
    console.log("link hash:"+hashlink);
    switch (hashlink) {
        case "home":
            return url.view.content+"home.js";
        case "about":
            return url.view.content+"about.js";
        case "profile/info":
            return url.view.content+"profile/info.js";
        default:
            return url.view.content+"home.js";
    }

}