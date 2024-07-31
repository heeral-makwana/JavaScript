n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML ="<br>"+"Date:"+ m + "/" + d + "/" + y;
document.getElementById("txt1").innerHTML=localStorage.getItem("textvalue1");
document.getElementById("txt2").innerHTML=localStorage.getItem("textvalue2");
document.getElementById("txt3").innerHTML=localStorage.getItem("textvalue3");
document.getElementById("txt4").innerHTML=localStorage.getItem("option1");
document.getElementById("txt5").innerHTML=localStorage.getItem("option2");
document.getElementById("txt6").innerHTML=localStorage.getItem("option3");
document.getElementById("r1").innerHTML=localStorage.getItem("radio1");
    var pay=document.getElementById("r1").innerHTML;
    if(pay=="CardPayment")
    {
        const h = document.createElement("h4");
        var x=localStorage.getItem("textvalue4");
        h.innerHTML = "Account Number:" + x + "" ;
        document.body.appendChild(h);

        const h1 = document.createElement("h4");
        var y=localStorage.getItem("textvalue5");
        h1.innerHTML = "CVV:" + y + "" ;
        document.body.appendChild(h1);
    }  
    