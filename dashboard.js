const orderBar = document.getElementById("order");
const productBar = document.getElementById("product");
const discountBar = document.getElementById("discount");
const openTog = document.getElementById("tgle");
const openTle = document.getElementById("tle");
const pduct = document.getElementsByClassName("prom");
const hrrz = document.getElementsByClassName("hrr");
const sideBar = document.getElementsByClassName("pan");
const veerotate = document.getElementsByClassName("navhover");
const promm = document.getElementsByClassName("promm");

function prod(){
	veerotate[5].classList.toggle("active");

	pduct[2].classList.toggle("active");
	pduct[3].classList.toggle("active");
	pduct[4].classList.toggle("active");
	pduct[5].classList.toggle("active");
	pduct[6].classList.toggle("active");
	promm[1].classList.toggle("isActive");
	
}
function discc(){
	veerotate[6].classList.toggle("active");

	pduct[7].classList.toggle("active");
	pduct[8].classList.toggle("active");
	promm[2].classList.toggle("isActive");
	
}
function ordd(){
	veerotate[4].classList.toggle("active");

	pduct[0].classList.toggle("active");
	pduct[1].classList.toggle("active");
	promm[0].classList.toggle("isActive");
	
}

function opene(){
	openTog.classList.add("openn");
	openTle.classList.add("openn");
	
}

function closer(){
	
	let isOpen = openTog.classList.contains("openn");
	if(isOpen){
		openTog.classList.remove("openn");
		openTle.classList.remove("openn");
	}
	
}

function order(){
	//sideBar[1].classList.remove("active");
	veerotate[0].classList.toggle("active");
	sideBar[1].classList.toggle("active");
	orderBar.classList.toggle("active");
}
function product(){
	//sideBar[0].classList.remove("active");
	veerotate[1].classList.toggle("active");
	sideBar[4].classList.toggle("active");
	productBar.classList.toggle("active");
}
function discount(){
	//sideBar[0].classList.remove("active");
	veerotate[2].classList.toggle("active");
	sideBar[5].classList.toggle("active");
	discountBar.classList.toggle("active");
}


























/*function order(){
	

	let isActive = orderBar.classList.contains("active");
	
	if(isActive){
		orderBar.classList.remove("active");
	}else{
		orderBar.classList.add("active");
	}
}

function product(){
	let isActive = productBar.classList.contains("active");
	
	if(isActive){
		productBar.classList.remove("active");
	}else{
		productBar.classList.add("active");
	}
}
function discount(){
	let isActive = discountBar.classList.contains("active");
	
	if(isActive){
		discountBar.classList.remove("active");
	}else{
		discountBar.classList.add("active");
	}
}

addEventListener('click', function order(){
	let isActive = sideBar.classList.contains("active");
	
	if(isActive){
		sideBar.classList.remove("active");
	}else{
		sideBar.classList.add("active");
	}
})*/
	