let sidebarbtn = document.getElementById("sidebar-btn");
let sidebar = document.querySelector(".sidebar");
let xbar = document.getElementById("xbar");
let xmark = document.getElementById("xmark");
 

xmark.classList.remove("fa-circle-xmark");


sidebarbtn.onclick = function (){
  sidebar.classList.toggle("side-move");
  sidebarbtn.classList.toggle("btn-move");
  xmark.classList.toggle("fa-circle-xmark");
  xbar.classList.toggle("fa-bars");
  sidebarbtn.style.border="0px";
};
