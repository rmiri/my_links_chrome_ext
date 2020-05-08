
var linkedin = document.getElementById('linkedin');
var linkedinInput = document.getElementById('linkedinInput')

var github = document.getElementById('github');
var githubInput = document.getElementById('githubInput')

var medium = document.getElementById('medium');
var mediumInput = document.getElementById('mediumInput');


const copyThis = (input) => {
    // input.select();
    // document.execCommand("copy");
    const el = document.createElement('textarea');
    el.value = input.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    alert("Copied the text: " + el.value);
    document.body.removeChild(el);
}


github.addEventListener("click", () => copyThis(githubInput));
linkedin.addEventListener("click", () => copyThis(linkedinInput));
medium.addEventListener("click", () => copyThis(mediumInput));

linkedinInput.onchange = function(){
    linkedinInput.innerText = linkedinInput.value
}



