import {baseURLHTML} from "https://jscroot.github.io/template/dc/starter/jscroot/config.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.0/croot.js";


function fetchHtml() {
    fetch(baseURLHTML+'sidebar.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
        setInner("sidebar-container",html);    
    });
}

fetchHtml();