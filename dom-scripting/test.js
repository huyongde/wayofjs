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
function test() {
	/*
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	var txt = document.createTextNode("hello, i am added by js");
	para.appendChild(txt);
	testdiv.appendChild(para);
	*/
	var para = document.createElement("p");
	var txt = document.createTextNode("This is ");
	para.appendChild(txt);
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	var txt3 = document.createTextNode(" content!");
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.style.color = "red";
	testdiv.style.fontWeight = "bold";
	testdiv.style.fontsize = "1.2em";
	testdiv.appendChild(para);
}
function dealTable() {
	var trs = document.getElementsByTagName("tr");
	var tr_cnt = trs.length;
	for (var i=0; i<tr_cnt; i++) {
		if(i%2 == 1){
			trs[i].style.backgroundColor = "green";
			trs[i].style.height = "30";
		}
	}
}
window.onload = function() {
	test();
	genLink();
	dealTable();
}
