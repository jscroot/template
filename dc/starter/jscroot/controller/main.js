import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";

import { url } from "https://jscroot.github.io/template/base/jscroot/url/config.js";
import { getURLContentJS } from "https://jscroot.github.io/template/base/jscroot/url/content.js";
import { showMenu,activeLink } from "https://jscroot.github.io/template/base/jscroot/controller/navbar.js";
import { getContentURL } from "https://jscroot.github.io/template/base/jscroot/url/content.js";


export function runAfterHashChange(evt){
    insertHTML(getContentURL(),"content",runAfterContent);
}

export function runAfterSidebar(){
    insertHTML(url.template.settings,"offcanvas",runAfterSettings);
}

function runAfterSettings(){
    insertHTML(url.template.header,"app_header",runAfterHeader);
}

function runAfterHeader(){
    insertHTML(url.template.search,"searchModal",runAfterSearch);
}

function runAfterSearch(){
    insertHTML(url.template.footer,"footer",runAfterFooter);
}

function runAfterFooter(){
    addScript("assets/js/SimpleBar.js");
    addScript("assets/js/app.js");
}

function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}

export async function runAfterContent(){
    let urljs = getURLContentJS();
    let module = await import(urljs);
    module.main();
    console.log(urljs);
}