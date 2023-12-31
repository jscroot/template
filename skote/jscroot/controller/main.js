import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";
import {addScriptInBody} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.3/croot.js";

import { url } from "https://jscroot.github.io/template/skote/jscroot/url/config.js";
import { getURLContentJS } from "https://jscroot.github.io/template/skote/jscroot/url/content.js";
import { getContentURL } from "https://jscroot.github.io/template/skote/jscroot/url/content.js";


function runAfterSidebar(){
    console.log("runaftersidebar");
    addScriptInBody("assets/libs/metismenu/metisMenu.min.js");
    insertHTML(url.template.rightbar,"right_bar",runAfterRightbar);
}

function runAfterRightbar(){
    console.log("runAfterRightbar");
    addScriptInBody("assets/libs/simplebar/simplebar.min.js");
    addScriptInBody("assets/libs/node-waves/waves.min.js");
    addScriptInBody("assets/js/app.js");
    //insertHTML(url.template.header,"app_header",runAfterHeader);
}

export function runAfterHeader(){
    console.log("runAfterHeader");
    insertHTML(url.template.sidebar,"side-menu",runAfterSidebar);
}

function runAfterSearch(){
    console.log("runAfterSearch");
    insertHTML(url.template.footer,"footer",runAfterFooter);
}

function runAfterFooter(){
    console.log("runAfterFooter"); 
    insertHTML(url.template.usernavbar,"usernavbar",runAfterUserNavbar);
}

function runAfterUserNavbar(){
    console.log("runAfterUserNavbar"); 
    addScriptInBody("assets/js/app.js");
}


export async function runAfterContent(){
    let urljs = getURLContentJS();
    console.log(urljs);
    let module = await import(urljs);
    module.main();
    console.log(urljs);
}

export function runAfterHashChange(evt){
    console.log("runAfterHashChange");
    insertHTML(getContentURL(),"content_layout",runAfterContent);
}