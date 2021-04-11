
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>  ________            ______                __   ______                
 /_  __/ /_  ___     / ____/___  ____  ____/ /  / ____/_  ____  _______
  / / / __ \/ _ \   / / __/ __ \/ __ \/ __  /  / / __/ / / / / / / ___/
 / / / / / /  __/  / /_/ / /_/ / /_/ / /_/ /  / /_/ / /_/ / /_/ (__  ) 
/_/ /_/ /_/\___/   \____/\____/\____/\__,_/   \____/\__,_/\__, /____/  
                                                         /____/        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
