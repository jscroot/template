export const croot = "https://jscroot.github.io/template/base/";

const folder={
    html:"html/",
    controller : "jscroot/controller/"
}

export const controllerfolder = croot+folder.controller;
const templatefolder=croot+folder.html;
export const url={
    content : templatefolder+"content.html",
    header: templatefolder+"header.html",
    navbar:templatefolder+"navbar.html",
    controller : controllerfolder
}