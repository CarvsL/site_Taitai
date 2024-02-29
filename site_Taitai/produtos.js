var currentIndex = 1;

function changeImage() {
  var img = document.getElementById("productImage");

  currentIndex = currentIndex % 4 + 1; // Cicla entre 1, 2, 3 e 4

  img.src = "barca" + currentIndex + ".jpeg";
}

function changeImage2() {
  var img = document.getElementById("productImage2");

  currentIndex = currentIndex % 4 + 1; // Cicla entre 1, 2, 3 e 4

  img.src = "hilal" + currentIndex + ".jpeg";
}