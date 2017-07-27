function $(id) {
    if(id.slice(0,1) === '.') {
        return document.getElementsByClassName(id.substr(1))[0];
    }else {
        return document.getElementById(id);
    }
}
