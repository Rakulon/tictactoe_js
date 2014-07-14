window.onload = function() {
	var squarey = document.getElementsByClassName("square");
	var reset = document.getElementById("resetButton");
	var myFunction = function() {
			if (this.innerHTML !== "X") {
				this.innerHTML = "X"
				this.style.color = "red";
			}
			else {
				this.innerHTML = "O"
				this.style.color = "blue";
			}
			
	};
	for (var i = 0, len = squarey.length ; i < len; i++) {
		squarey[i].onclick = myFunction;
	};
	if (reset.onclick){
	  squarey[i].innerHTML = "";
	}
	var mySecFunction = function() {
			if (squarey.innerHTML !== "") {
				squarey.innerHTML = ""
				this.style.color = "re"
			}
}
}