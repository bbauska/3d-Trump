/* 3d-Trump/js/script.js for 3d-Trump.bauska.org */
// Place text "statement of Trump lies" into const readOut.
const readOut = `<p>Authoritarianism permiates everything, everyone, at some level. Education for families becomes 
privates schooling. That is just one huge example. Huge example. As the rise of <span>authoritarianism</span> 
becomes more, we must fight back. Give hugs. Talk about it.</p>`;
  
// Function to insert silusGW into divs
function insertreadOutIntoDivs() {
  // Get all .text divs
  const textDivs = document.querySelectorAll(".text");

  // Insert readOut into all .text divs.
  textDivs.forEach((div) => {
    div.innerHTML = readOut;
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertreadOutIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor =
    viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
