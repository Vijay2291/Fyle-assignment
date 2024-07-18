let changeColor=document.querySelector(".text-1");
let changeColor1=document.querySelector(".text-2");
let changeColor2=document.querySelector(".text-3");
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
function change(){
	img1.style.visibility="visible";
	img2.style.visibility="hidden";
	img3.style.visibility="hidden";
	changeColor.style.background="#ff3147";
	changeColor1.style.background="#f6f6f6";
	changeColor2.style.background="#f6f6f6";

}
function change1(){
	img1.style.visibility="hidden";
	img2.style.visibility="visible";
	img3.style.visibility="hidden";
	changeColor.style.background="#f6f6f6";
	changeColor1.style.background="#ff3147";
	changeColor2.style.background="#f6f6f6";
}
function change2(){
	img1.style.visibility="hidden";
	img2.style.visibility="hidden";
	img3.style.visibility="visible";
	changeColor.style.background="#f6f6f6";
	changeColor1.style.background="#f6f6f6";
	changeColor2.style.background="#ff3147";
}

const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");
const popup = document.getElementById("myPopup");
openPopupBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});