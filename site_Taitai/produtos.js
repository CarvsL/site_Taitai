var camisa = 1;

function changeImage() {
  var img = document.getElementById("productImage");

  camisa = camisa % 4 + 1; // Cicla entre 1, 2, 3 e 4

  img.src = "barca" + camisa + ".jpeg";
}

function changeImage2() {
  var img = document.getElementById("productImage2");

  camisa = camisa % 4 + 1; // Cicla entre 1, 2, 3 e 4

  img.src = "hilal" + camisa + ".jpeg";
}

function changeImage3() {
  var img = document.getElementById("productImage3");

  camisa = camisa % 3 + 1; // Cicla entre 1, 2, 3 

  img.src = "miami" + camisa + ".jpeg";
}

function changeImage4() {
  var img = document.getElementById("productImage4");

  camisa = camisa % 4 + 1; // Cicla entre 1, 2, 3 e 4

  img.src = "ajax" + camisa + ".jpeg";
}




