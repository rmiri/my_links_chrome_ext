
var linkedin = document.getElementById('linkedin');
var linkedinInput = document.getElementById('linkedinInput')

var github = document.getElementById('github');
var githubInput = document.getElementById('githubInput')

var medium = document.getElementById('medium');
var mediumInput = document.getElementById('mediumInput');


const copyThis = (theInput) => {
    theInput.select();
    document.execCommand("copy");
}


linkedin.onclick = copyThis(linkedinInput);
medium.onclick = copyThis(mediumInput);
github.onclick = copyThis(githubInput);





