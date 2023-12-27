export const croot = "https://jscroot.github.io/template/base/";

const folder={
    html:"html/",
    controller : "jscroot/controller/",
    content : "html/content"
}

export const controllerfolder = croot+folder.controller;
const templatefolder=croot+folder.html;
export const url={
    content : templatefolder+"content/",
    header: templatefolder+"header.html",
    navbar:templatefolder+"navbar.html",
    controller : controllerfolder
}