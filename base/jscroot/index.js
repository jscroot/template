import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import {runAfterAll} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.1/croot.js";
import { url } from "https://jscroot.github.io/template/base/jscroot/config.js";
import { showMenu,activeLink } from "https://jscroot.github.io/template/base/jscroot/controller/navbar.js";



insertHTML(url.header,"header__container",runAfterHeader);

insertHTML(url.content,"content");

function runAfterHeader(){
    insertHTML(url.navbar,"navbar",runAfterNavbar);
    
}

function runAfterNavbar(){
    showMenu('header-toggle','navbar');
    activeLink('.nav__link');
}
