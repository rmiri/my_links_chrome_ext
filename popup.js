
var linkedin = document.getElementById('linkedin');
var linkedinInput = document.getElementById('linkedinInput')

var github = document.getElementById('github');
var githubInput = document.getElementById('githubInput')

var medium = document.getElementById('medium');
var mediumInput = document.getElementById('mediumInput');

var message = document.getElementById('message')

const copyThis = (input) => {
    const el = document.createElement('textarea');
    el.value = input.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    message.innerText = "Copied"
}


github.addEventListener("click", () => copyThis(githubInput));
linkedin.addEventListener("click", () => copyThis(linkedinInput));
medium.addEventListener("click", () => copyThis(mediumInput));

linkedinInput.onchange = function(){
    alert(linkedinInput.value)
}



