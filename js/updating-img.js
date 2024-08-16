//Desktop to Mobile Bg/Img/Icon switching
function updateImages() {
  const dropDownArrows = document.querySelectorAll(".dropdown-arrow");
  const screenWidth = window.innerWidth;

  dropDownArrows.forEach(arrow => {
    if (screenWidth <= 899) {
      arrow.src = "images/icon-arrow-dark.svg";
    } else {
      arrow.src = "images/icon-arrow-light.svg";
    }
  });
}

window.onload = updateImages;
window.onresize = updateImages;
