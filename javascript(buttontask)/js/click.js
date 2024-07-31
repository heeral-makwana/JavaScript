var pagebody=document.querySelector("body");

function color(){
    var bgcolor="#"+(Math.random()*0xFFF<<0).toString(8);
    pagebody.style.background=bgcolor;
}