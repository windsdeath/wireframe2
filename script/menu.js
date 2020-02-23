var ptag = document.querySelector(".ptag");
var btn = document.querySelector("button");
var pop = document.querySelector(".popup");

ptag.addEventListener("click",pclick);
btn.addEventListener("click",btnclick);
function pclick(){
   pop.classList.add("openp");
};
function btnclick(){
   pop.classList.remove("openp");
};