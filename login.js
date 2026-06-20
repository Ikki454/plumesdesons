let data;

async function loadData() {
    const response = await fetch('data.json');
    data = await response.json();

    setUpBtns();
    generateLoginForm();
}

function setUpBtns() {
    
    const submit_btn = document.querySelector(".submit-btn");
    submit_btn.addEventListener("click", function(event) {
        event.preventDefault();
        const logInfo = data.login[0];

        if (logInfo.login_state === 0) {
            login();
        }else {
            signup();
        }
    });

    const signup_btn = document.querySelector(".signup-link");
    signup_btn.addEventListener("click", function(event) {
        event.preventDefault();
        const logInfo = data.login[0];

        if (logInfo.login_state === 0) {
            generateSignupForm();
            logInfo.login_state = 1;
        } else {
            generateLoginForm();
            logInfo.login_state = 0;
        }
    });
}

function login() {
    const idInput = document.getElementById("id");
    const passwordInput = document.getElementById("mdp");

    for(let i=1; i < data.login.length; i++) {
        const login = data.login[i];

        if (idInput.value === login.id && passwordInput.value === login.mdp) {
            logInfo.isLog = true;
            logInfo.logId = login.id;
            logInfo.mail = login.mail;
            logInfo.isAdmin = login.isAdmin;

            console.log("Connexion réussie !");
            break;
        }
    }        
}
function signup() {
    const form = document.querySelector(".login-form");
    form.innerHTML="";
}


function generateLoginForm() {
    const loginTile = document.querySelector(".login-title");
    loginTile.innerText = "Connexion";

    const form = document.querySelector(".login-form");
    form.innerHTML="";

    const idLabel = document.createElement("label");
    idLabel.htmlFor = "id";
    idLabel.innerText = "Identifiant";

    const idInput = document.createElement("input");
    idInput.type = "text";
    idInput.id = "id";
    idInput.name = "id";
    idInput.placeholder = "Entrez votre identifiant";
    idInput.required = true;

    const mdpLabel = document.createElement("label");
    mdpLabel.htmlFor = "mdp";
    mdpLabel.innerText = "Mot de passe";

    const mdpInput = document.createElement("input");
    mdpInput.type = "password";
    mdpInput.id = "mdp";
    mdpInput.name = "mdp";
    mdpInput.placeholder = "Entrez votre mot de passe";
    mdpInput.required = true;

    const submit_btn = document.createElement("button");
    submit_btn.type = "submit";
    submit_btn.classList.add("submit-btn");
    submit_btn.innerText = "Se connecter";

    form.appendChild(idLabel);
    form.appendChild(idInput);
    form.appendChild(mdpLabel);
    form.appendChild(mdpInput);
    form.appendChild(submit_btn);

    const signText = document.querySelector(".signup-msg");
    signText.innerText = "Pas encore de compte ?";

    const signText1 = document.querySelector(".signup-link");
    signText1.innerText = "Créez-en un";
}
function generateSignupForm() {
    const loginTile = document.querySelector(".login-title");
    loginTile.innerText = "Création de Compte";

    const form = document.querySelector(".login-form");
    form.innerHTML="";

    const mailLabel = document.createElement("label");
    mailLabel.htmlFor = "mail";
    mailLabel.innerText = "Adresse e-mail";

    const mailInput = document.createElement("input");
    mailInput.type = "email";
    mailInput.id = "mail";
    mailInput.name = "mail";
    mailInput.placeholder = "Entrez votre adresse e-mail";
    mailInput.required = true;

    const idLabel = document.createElement("label");
    idLabel.htmlFor = "id";
    idLabel.innerText = "Identifiant";

    const idInput = document.createElement("input");
    idInput.type = "text";
    idInput.id = "id";
    idInput.name = "id";
    idInput.placeholder = "Entrez votre identifiant";
    idInput.required = true;

    const mdpLabel = document.createElement("label");
    mdpLabel.htmlFor = "mdp";
    mdpLabel.innerText = "Mot de passe";

    const mdpInput = document.createElement("input");
    mdpInput.type = "password";
    mdpInput.id = "mdp";
    mdpInput.name = "mdp";
    mdpInput.placeholder = "Entrez votre mot de passe";
    mdpInput.required = true;

    const mdpLabel2 = document.createElement("label");
    mdpLabel2.htmlFor = "mdp2";
    mdpLabel2.innerText = "Confirmer le mot de passe";

    const mdpInput2 = document.createElement("input");
    mdpInput2.type = "password";
    mdpInput2.id = "mdp2";
    mdpInput2.name = "mdp2";
    mdpInput2.placeholder = "Confirmez votre mot de passe";
    mdpInput2.required = true;

    const submit_btn = document.createElement("button");
    submit_btn.type = "submit";
    submit_btn.classList.add("submit-btn");
    submit_btn.innerText = "Créer le compte";

    form.appendChild(mailLabel);
    form.appendChild(mailInput);
    form.appendChild(idLabel);
    form.appendChild(idInput);
    form.appendChild(mdpLabel);
    form.appendChild(mdpInput);
    form.appendChild(mdpLabel2);
    form.appendChild(mdpInput2);
    form.appendChild(submit_btn);

    const signText = document.querySelector(".signup-msg");
    signText.innerText = "Deja un compte ?";

    const signText1 = document.querySelector(".signup-link");
    signText1.innerText = "Connecter-vous";
}

loadData();