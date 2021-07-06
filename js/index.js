// Prevent default for links

document.querySelectorAll(".nav-link").forEach(element => {
	element.addEventListener("click", function(event) {
		event.preventDefault();
	});
});

//Alert on copy to clipboard

document.body.addEventListener("copy", function() {
	alert("Text copied to clipboard");
});

// Mouse over apply filter

document.querySelector('header img').addEventListener('mouseover', function (event) {
    document.querySelector('header img').setAttribute("style", "filter: blur(4px);")
})

// On drag change display value

document.querySelectorAll("img").forEach(element => {
	element.addEventListener("drag", function(event) {
        if(event.screenX == 0 && event.screenY == 0){
            event.target.style.display = "block";
        }
        else{
            event.target.style.display = "none";
        }
	});
});

// On click add bold to each nav link

document.querySelectorAll(".nav-link").forEach(element => {
	element.addEventListener("click", function(event) {
		event.target.style.fontWeight = "bold";
	});
});

// Stop proporgation and mouse wheel color

document.querySelector(".footer p").addEventListener("mousewheel", function(event) {
	event.target.style.color = "red";
	event.stopPropagation();
});

// Double click logo make bigger

document.querySelector(".logo-heading").addEventListener("dblclick", function(event) {
    document.querySelector(".logo-heading").setAttribute("style", "font-size: 5em;")
})

// Stop Propagation and on scroll change head background

document.addEventListener("scroll", function (event) {
    document.querySelector('.main-navigation').setAttribute("style", "background-color:red")
    event.stopPropagation();
})

// Alert on paste

document.addEventListener('paste', function (event){
    alert('You have pasted something!')
})

// Alert on mouse enter to body

document.addEventListener('mouseenter', function (event){
    alert('Might I suggest dragging the pictures ;)')
})




