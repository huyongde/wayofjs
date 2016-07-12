function postionMessage() {
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    setTimeout("moveMessage()", 10);
};
function moveMessage() {
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 200) {
        return true;
    }
    if (xpos <200) {
        xpos++;
    } else {
        xpos--;
    }
    if (ypos < 200) {
        ypos++;
    } else {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    setTimeout("moveMessage()", 10);
};

window.onload = function() {
    postionMessage();
};

