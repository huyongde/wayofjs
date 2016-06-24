function showPic(whichPic){ // dom core
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
}

function showPicV2(whichPic){  // html dom
	var source = whichPic.href;
	var placeholder = document.getElementById("placeholder");
	placeholder.src = source;
}

function countChildNum(){
	var body_element = document.getElementsByName('body');
	alert(body_element.length);
}

window.onload=genLink;
function genLink(){
	var elements = document.getElementsByTagName("a"); //此处是getElementsByTagName，不是getElementsByName
	for (var i = 0; i < elements.length; i++) {
    	elements[i].onclick = function(){
    		showPicV2(this); // 此处只能用this，不能用elements[i]
    		return false;
    	};
    	elements[i].onkeypress = function(){
    		showPicV2(this); // 此处只能用this，不能用elements[i]
    		return false;
    	};
	}
}
