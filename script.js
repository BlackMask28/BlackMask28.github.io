var num = 20;
function myFunction() {
  var img = document.getElementById("image");
  var rotate = 'rotate(' + num.toString() + 'deg)';
  console.log(num);
  img.style.transform = rotate;
  num += 20;
}