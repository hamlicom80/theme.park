
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre> +-+ +-+ +-+   +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+
 |T| |h| |e|   |G| |o| |o| |d|   |G| |u| |y| |s|
 +-+ +-+ +-+   +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
