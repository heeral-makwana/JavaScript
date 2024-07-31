function validation(){
    var fname=document.getElementById('fname').value;
    var price=document.getElementById('price').value;
    var email=document.getElementById('email').value;
    var anumber=document.getElementById('anumber').value;
    var cvv=document.getElementById('cvv').value;
var x= /^[A-Za-z]+$/;
if(fname == ""){
  alert(" ** Please fill the username field");
  valid= false;
}   
else if(!x.test(fname)){
  alert("First Nmae:Please Enter only Characters");
  return false;
}
else if(isNaN(price)){
  alert("Price: must write digits only not characters");
  return false;
}
else if(email.indexOf('@') <= 0 ){
  alert("Email: Invalid Email....");
  return false;
}
else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
  alert(" Email: . Invalid Position");
  return false;
}
else if(isNaN(anumber)){
  alert("Account Number: must write digits only not characters");
  return false;
}
else if(isNaN(cvv)){
  alert("CVV: must write digits only not characters");
  return false;
}
else {
  passvalue();
}
}

function yesnoCheck()
 {
  if (document.getElementById('yesCheck').checked)
  {
    document.getElementById('ifYes').style.visibility = 'hidden';
    document.getElementById('anumber').required=false;
    document.getElementById('cvv').required=false;
    return false;
  }
  else
  {
    document.getElementById('ifYes').style.visibility =  'visible';
    document.getElementById('anumber').required=true;
    document.getElementById('cvv').required=true;
  }
  }  
  function passvalue(){
    var fname=document.getElementById('fname').value;
    localStorage.setItem("textvalue1",fname);
    var price=document.getElementById('price').value;
    localStorage.setItem("textvalue2",price);
    var email=document.getElementById('email').value;
    localStorage.setItem("textvalue3",email);
    var anumber=document.getElementById('anumber').value;
    localStorage.setItem("textvalue4",anumber);
    var cvv=document.getElementById('cvv').value;
    localStorage.setItem("textvalue5",cvv);
    var pay= document.querySelector('input[name = "yesno"]:checked').value;
    localStorage.setItem("radio1",pay);
  }
  function ctg(selectObject) {
    var x = selectObject.value;  
    localStorage.setItem("option1",x);
  }
  
  var lists = new Array(3)
  lists["empty"] = ["Select"]; 
  lists["Clothes"] = ["T-Shirt", "Shirt","Jeans","cap","saari","Kurta"]; 
  lists["Accesseries"] = ["Watch", "Wallet", "Ring", "Shoe","NailPolish","Necklace","Sock","Sunglasses","Tie","Headband"]; 
  lists["Electronis"] = ["Mobile", "Laptop", "Toys","TV"]; 
  function countryChange(selectObj) { 
  var idx = selectObj.selectedIndex; 
  var which = selectObj.options[idx].value; 
  cList = lists[which]; 
  var cSelect = document.getElementById("cg"); 
  while (cSelect.options.length > 0) { 
  cSelect.remove(0);  }
  var newOption; 
  for (var i=0; i<cList.length; i++) { 
  newOption = document.createElement("option"); 
  newOption.value = cList[i];  
  newOption.text=cList[i]; 
  cSelect.add(newOption);  
  } 
  localStorage.setItem("option2",which);
  }
  function opt(selectObject) {
  var item = selectObject.value;  
  localStorage.setItem("option3",item);
  }
   
  
  
  
  