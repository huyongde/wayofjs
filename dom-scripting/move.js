function postionMessage() {
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    //setTimeout("moveMessage();", 10);
    moveElement("message", 500, 500, 10);
}
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
    var repeat = "moveMessage()";
    setTimeout(repeat, 10);
}
function moveElement(elementId, final_x, final_y, interval) {
    var elem = document.getElementById(elementId);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (ypos > final_y) {
        ypos--;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementId+"',"+ final_x +","+ final_y+","+interval+")";
    movement = setTimeout(repeat, interval);
}

window.onload = function() {
    postionMessage();
};

