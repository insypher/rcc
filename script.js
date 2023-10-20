// // script.js

// // Get the modal and the button that opens it
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("open-modal-btn");
// var closeBtn = document.getElementsByClassName("close")[0]; // Get the close button element

// // Open the modal when the button is clicked
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // Close the modal when the close button is clicked
// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };

// // Close the modal when the user clicks anywhere outside the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// script.js

// Get the modals and their respective buttons
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

var btn1 = document.getElementById("open-modal-btn-1");
var btn2 = document.getElementById("open-modal-btn-2");
var btn3 = document.getElementById("open-modal-btn-3");
var btn4 = document.getElementById("open-modal-btn-4");

var closeBtns = document.getElementsByClassName("close"); // Get all close button elements

// Open the first modal when its button is clicked
btn1.onclick = function () {
  modal1.style.display = "block";
};

// Open the second modal when its button is clicked
btn2.onclick = function () {
  modal2.style.display = "block";
};

// Open the third modal when its button is clicked
btn3.onclick = function () {
  modal3.style.display = "block";
};

btn4.onclick = function () {
  modal4.style.display = "block";
};

// Close the modals when their respective close buttons are clicked
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function () {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  };
}

// Close the modals when the user clicks anywhere outside the modals
window.onclick = function (event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  }
};
