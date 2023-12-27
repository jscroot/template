import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.3/croot.js";
import {runAfterDOM} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.1/croot.js";
import { url } from "https://jscroot.github.io/template/base/jscroot/config.js";
import { showMenu,activeLink } from "https://jscroot.github.io/template/base/jscroot/controller/navbar.js";



async function loadComponent(){
    insertHTML(url.header,"header__container");
    insertHTML(url.navbar,"navbar");
    insertHTML(url.content,"content");
}

async function runMain(){
    await loadComponent();
    showMenu('header-toggle','navbar');
    activeLink('.nav__link');
}

runMain();


