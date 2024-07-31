    document.getElementById("txt1").innerHTML=localStorage.getItem("textvalue1");
    document.getElementById("txt2").innerHTML=localStorage.getItem("textvalue2");
    document.getElementById("txt3").innerHTML=localStorage.getItem("textvalue3");
    document.getElementById("txt4").innerHTML=localStorage.getItem("textvalue4");
    document.getElementById("r1").innerHTML=localStorage.getItem("radio1");
    document.getElementById("r2").innerHTML=localStorage.getItem("radio2");
    var sname=document.getElementById("r2").innerHTML;
        if(sname=="Married")
        {
        const h = document.createElement("h5");
        var x=localStorage.getItem("textvalue5");
        h.innerHTML = "Spouse Name:" + x + "" ;
        document.body.appendChild(h);
        }
        document.getElementById("txt6").innerHTML=localStorage.getItem("textvalue6");
                       