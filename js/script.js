/* 3d-Trump/js/script.js for 3d-Trump.bauska.org */
// Place text "statement of Trump lies" into const readOut.
const readOut = `<p><span>Authoritarianism</span> permiates everything, everyone, at some 
level. Education for families becomes private schooling. That is just one example. As the 
rise of authoritarianism grows, we must fight back. Give hugs. Talk about it.<br>
<span>MAGA</span> includes the uneducated, the selfish, the racist, and the very stupid. 
Mostly <span>stupid</span>.
<span>War</span> is a risky business. American casualties, <span>sky-high gas</span> prices 
and a <span>higher cost</span> of living could provoke previous Trump supporters to turn against 
the president, belatedly fulfilling the assessment that Trump’s decision to go to war defies the 
desires of his base. But that may be a long way off. After all, most MAGA supporters voted for the 
man three fucking times — and would vote for him another three times if they could. Concluding he 
was wrong about the war might mean he was wrong about other things, too … and thus, they themselves 
were wrong to believe in his judgment so fervently.
<span>White House Correspondents Dinner</span> was a joke. So pathetic. Trump blocks news at every 
chance. So they have a dinner for him. WTF? WTF? WTF? Authoritarian. Our president my ass!</p>`;
  
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
