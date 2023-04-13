var h=document.getElementById("head");
function work(){
    h.textContent="Good Morning";
}

var p1=document.getElementById("para_1");
function demo(){
    p1.textContent=" Bye Bye........8-)";
    p1.style.fontSize="100px";
    p1.style.color="crimson";
}

var p2=document.getElementById("para_2");
function demo_1(){
    p2.classList.add("p2");
}

var p3=document.getElementById("para_3");
function demo_2(){
    p3.className="bg-success text-white text-center";
}