export const croot = "https://jscroot.github.io/template/base/";

const folder={
    html:"html/",
    controller : "jscroot/controller/",
    view : "jscroot/view/",
    content : "html/content"
}

export const controllerfolder = croot+folder.controller;
const templatefolder=croot+folder.html;

export const url={
    content : templatefolder+"content/",
    header: templatefolder+"header.html",
    navbar:templatefolder+"navbar.html",
    controller : croot+folder.controller,
    view : croot+folder.view,
    contentview: croot+folder.view+"content/"
}