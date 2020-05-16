
const linkedin = document.getElementById('linkedin');
const linkedinInput = document.getElementById('linkedinInput')

const github = document.getElementById('github');
const githubInput = document.getElementById('githubInput')

const medium = document.getElementById('medium');
const mediumInput = document.getElementById('mediumInput');

const message = document.getElementById('message')

const copyThis = (input) => {
    const el = document.createElement('textarea');
    el.value = input.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    message.innerText = `Copied ${input.value}`
}


github.addEventListener("click", () => copyThis(githubInput));
linkedin.addEventListener("click", () => copyThis(linkedinInput));
medium.addEventListener("click", () => copyThis(mediumInput));

linkedinInput.onchange = function(){
    alert(linkedinInput.value)
}



