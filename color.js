const red = document.querySelector(".red");

const black = document.querySelector(".black");

const violet = document.querySelector(".violet");

const orange = document.querySelector(".orange");

const green = document.querySelector(".green");

const center = document.querySelector(".center");

const getBGcolor = (selectedElement)=>{
	return window.getComputedStyle(selectedElement).backgroundColor;
	
}
const magicColorChanger = (element,color)=>{
	return element.addEventListener("mouseenter",()=>{
		center.style.background = color;
	});
};

magicColorChanger(red,getBGcolor(red));
magicColorChanger(black,getBGcolor(black));
magicColorChanger(violet,getBGcolor(violet));
magicColorChanger(orange,getBGcolor(orange));
magicColorChanger(green,getBGcolor(green));