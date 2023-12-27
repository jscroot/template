import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import { url } from "https://jscroot.github.io/template/base/jscroot/url/config.js";
import { showMenu,activeLink } from "https://jscroot.github.io/template/base/jscroot/controller/navbar.js";
import { getContentURL } from "https://jscroot.github.io/template/base/jscroot/controller/content.js";


export function runAfterHashChange(evt){
    insertHTML(getContentURL(),"content",runAfterContent);
}

export function runAfterHeader(){
    insertHTML(url.navbar,"navbar",runAfterNavbar);
}

export function runAfterNavbar(){
    showMenu('header-toggle','navbar');
    activeLink('.nav__link');
    activeLink('.nav__dropdown-item');
}

export function runAfterContent(){
    console.log("selesai get content");
}