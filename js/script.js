/* 3d-Trump/js/script.js for readout.bauska.org */
// Place text "statement of Trump lies" into const readOut.
const readOut = `<p>Authoritarianism permiates everything, everyone, at some level. Education for families becomes 
privates schooling. That is just one huge example. Huge example. As the rise of authoritarianism 
becomes more, we must fight back. Give hugs. Talk about it.</p>

<p><span>MAGA</span> includes the uneducated, selfish, and stupid. Mostly <span>stupid</span>.

<p><span>War</span> is a risky business. More American casualties, <span>sky-high gas</span> prices 
and a <span>higher cost</span> of living 
could provoke previous Trump supporters to turn against the president, belatedly fulfilling the 
assessment that Trump’s decision to go to war defies the desires of his base. But that may be a 
long way off. After all, most MAGA supporters voted for the man three fucking times — and would 
vote for him another three times if they could. Concluding he was wrong about the war might mean 
he was wrong about other things, too … and thus, they themselves were wrong to believe in his 
judgment so fervently.</p>

<p>We are not born <span>free</span>. We grow and the populace gives us the <span>freedom</span> needed 
to <span>grow</span> with it. <span>No</span> one is <span>born free</span>.</p>

<p><span>Freedom of assembly</span>. <span>Freedom</span> of <span>petition</span>.
Not reality their dealing with. Can not overcome it.
Don't argue emotionally with them. The past is the past. Don't argue over it.
Never done with the past. Argue, appeal, appeal again. Again, again, again.
Never call them names. Narcissist, liar, sociopath, abuser, etc.</p>

<p><span>CARS</span> = 
<span>Connecting</span>  <span>Analyzing</span>  <span>Responding</span> <span>Setting limits</span>
<span>CARS</span></p>

<p><span>Empathy, Analyze and Respect</span>.</p>

<p>Options? What can be done here? Never name-calling. Don't get defensive. 
Respond to misinformation with truth, truth, truth. 
Set limits.
And give consequences if they go beyond limits/boundaries.

SETTING LIMITS AND IMPOSING CONSEQUENCES in 2.5 steps.

<p><span>EAR</span> - Dealing with narcissist
<span>Empathy</span>
<span>Attention</span>
<span>Respect</span>
They run on <span>emotions</span> not intelligence or logic.
Law is 99% logic. Left-brain Right-brain...
<span>narcissist / sociopath</span>
<span>fantasy crisis created by Trump with <span>ICE</span>.</p>

<p><span>Jan 6 insurrection</span>.
Who are these sick fuckers who put their career above the human race. Above free and accessible energy. 
Fuck you and everything you are!</p>

<p>Why are all (or almost all) living scientists cowards?</p>

<p>How do we as Americans take back our nation? Not just from Trump and his sycophants in MAGA but from the military
industrial complex?
Peter Thiel and VP Vance (cold fish)
The Apprentice created a monster.
Will the "Grand Ol' Party" be around in 3 years?
Social media is enemy #1.
Need empathy now more than at any time in my life.
Need a united message.
That's a fantasy crisis, hero, solution.
Catch 22.</p>`;

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
