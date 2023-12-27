import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import { url } from "https://jscroot.github.io/template/base/jscroot/config.js";
import { showMenu,activeLink } from "https://jscroot.github.io/template/base/jscroot/controller/navbar.js";
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";

let hashlink;

insertHTML(url.header,"header__container",runAfterHeader);

insertHTML(url.content,"content",runAfterContent);

function getContentURL(){
    hashlink=parseInt(getHash());
    switch (hashlink) {
        case 1:
            return url.content+"home.html";
        case 21:
            return url.content+"profile/passwords.html";
        case 22:
            return url.content+"profile/mail.html";
        case 23:
            return url.content+"profile/accounts.html";
        case 3:
            return url.content+"messages.html";
        case 41:
            return url.content+"notifications/blocked.html";
        case 42:
            return url.content+"notifications/silenced.html";
        case 43:
            return url.content+"notifications/publish.html";
        case 44:
            return url.content+"notifications/program.html";
        case 5:
            return url.content+"explore.html";
        case 6:
            return url.content+"saved.html";
        case 7:
            return url.content+"logout.html";
        default:
            return url.content+"home.html";
    }

}

function runAfterHeader(){
    insertHTML(url.navbar,"navbar",runAfterNavbar);
}

function runAfterNavbar(){
    showMenu('header-toggle','navbar');
    activeLink('.nav__link');
    activeLink('.nav__dropdown-item');
}

function runAfterContent(){
    console.log("selesai get content");
}