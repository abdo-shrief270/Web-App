let control=document.getElementById('control');
let moving=document.getElementById('moving');
let dis=document.getElementById('dis');
let appear=document.getElementById('appear');
moving.classList.add('hide');
control.onclick=function()
{   
    moving.classList.toggle('hide');
    dis.classList.toggle('hide');
    appear.classList.toggle('hide');
    control.classList.toggle('anime');  
}



let sidebarbtn = document.getElementById("sidebar-btn");
let sidebar = document.querySelector(".sidebar");
let xbar = document.getElementById("xbar");
let xmark = document.getElementById("xmark");
sidebar.classList.add("hide");

xmark.classList.remove("fa-circle-xmark");

sidebarbtn.onclick = function (){
  sidebar.classList.toggle("side-move");
  sidebarbtn.classList.toggle("btn-move");
  xmark.classList.toggle("fa-circle-xmark");
  xbar.classList.toggle("fa-bars");
  sidebar.classList.toggle("hide");
  sidebarbtn.style.border="0px";
};