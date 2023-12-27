import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.3/croot.js";
import {runAfterDOM} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.1/croot.js";
import { url } from "https://jscroot.github.io/template/base/jscroot/config.js";
import { showMenu,activeLink } from "https://jscroot.github.io/template/base/jscroot/controller/navbar.js";



await insertHTML(url.header,"header__container");
await insertHTML(url.navbar,"navbar");
showMenu('header-toggle','navbar');
activeLink('.nav__link');

insertHTML(url.content,"content");

