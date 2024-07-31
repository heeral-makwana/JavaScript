var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}
function changeText(text){
            var display = document.getElementById('text-display');
            var display1 = document.getElementById('text-display1');
            var display2 = document.getElementById('text-display2');
            var display3 = document.getElementById('text-display3');
            var display4 = document.getElementById('text-display4');
            display.innerHTML = ""; display.innerHTML = text;
            display1.innerHTML = ""; display1.innerHTML = text;
            display2.innerHTML = ""; display2.innerHTML = text;
            display3.innerHTML = ""; display3.innerHTML = text;
            display4.innerHTML = ""; display4.innerHTML = text;
}
function changeback(text){
            var display = document.getElementById('text-display');
            var display1 = document.getElementById('text-display1');
            var display2 = document.getElementById('text-display2');
            var display3 = document.getElementById('text-display3');
            var display4 = document.getElementById('text-display4');
            display.innerHTML = ""; display.innerHTML = text;
            display1.innerHTML = ""; display1.innerHTML = text;
            display2.innerHTML = ""; display2.innerHTML = text;
            display3.innerHTML = ""; display3.innerHTML = text;
            display4.innerHTML = ""; display4.innerHTML = text;
}