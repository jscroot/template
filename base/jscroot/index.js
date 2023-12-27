import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import { url } from "https://jscroot.github.io/template/base/jscroot/config.js";
import { showMenu,activeLink } from "https://jscroot.github.io/template/base/jscroot/controller/navbar.js";
import { getContentURL } from "https://jscroot.github.io/template/base/jscroot/controller/content.js";
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";

insertHTML(url.header,"header__container",runAfterHeader);

insertHTML(getContentURL(),"content",runAfterContent);


window.addEventListener('hashchange', function(){
    console.log("url hash berubah");
    let hashlink=getHash();
    console.log(hashlink);
  }); 

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