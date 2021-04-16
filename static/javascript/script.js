function newStyle() {
        console.log("in function newStyle")
        let newColor ='';
        let newFont = ''
        var element = document.getElementById('target');
        element.style.color = "purple";
        element.style.fontFamily = "Impact";
}
function showMoreFunc() {
	let excel = document.createElement("li");
	excel.innerHTML = "<a href ='https://excelfind.com/downloads/?action=ga'>Excel</a>"

	let algebra = document.createElement("li");
	algebra.innerHTML = "<a href= 'https://www.3blue1brown.com/essence-of-linear-algebra-page'>Algebra</a>";

	document.getElementById("list").appendChild(excel);
	document.getElementById("list").appendChild(algebra);
}