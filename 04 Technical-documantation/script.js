/*var selected = 'Introduction';
function clicked(e) {
	prev_elem = document.getElementById(selected);
	curr_elem = document.getElementById(e);
	
	c = prev_elem.childNodes;
	c[0].classList.remove("active");
	console.log("done");
}*/

var links = document.getElementsByClassName("nav-link");
for (var i=0; i < links.length; i++) {
	links[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		var ch = this.children;
		ch[0].className+="active";
	});
}
