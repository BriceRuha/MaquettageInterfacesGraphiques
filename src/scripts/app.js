import moment from 'moment'

moment.locale('fr')
const element = document.createElement('p');
element.innerHTML =
`Le cours a commencé :
${moment("2020 04 27, 8:00:00 am", "YYYY MM DD, h:mm:ss a")
 .fromNow()}`;
document.body.appendChild(element);



    const email = 'hello@lp.wd'
    const password = 'qwerty'

    /*  const onLoginFormSubmit = e => {
       e.preventDefault(); // Annule l'action par défaut
       // TODO
     }
     document.querySelector('#loginForm')
       .addEventListener('submit', onLoginFormSubmit) */


    const onLoginFormSubmit = e => {
      // ...
      // Récupère les données du formulaire
      const data = new FormData(e.target)
      const response = processDataForm(data)
      // ...
    }


    // Fonction permettant l'affichage du mot de passe
    function togglePwd(id) {
      var x = document.getElementById(id);
      x.type = (x.type === "password") ? "text" : "password";
    }




    var titreConnexion = document.querySelector(".titreConnexion");
    var titreInscription = document.querySelector(".titreInscription");
    var etapes = document.querySelector(".etapes");
    var x = document.querySelector("#login");
    var y = document.querySelector("#register1");
    var register2 = document.querySelector("#register2");
    var register3 = document.querySelector("#register3");
    var z = document.querySelector("#btn");

    var etape1 = document.querySelector("#etape1");
    var etape2 = document.querySelector("#etape2");
    var etape3 = document.querySelector("#etape3");


    document.querySelector("#register-btn").addEventListener("click", inscription);
    document.querySelector("#noAccount").addEventListener("click", inscription);
    document.querySelector("#login-btn").addEventListener("click", connexion);
    document.querySelector("#alreadyAccount").addEventListener("click", connexion);


    document.querySelector("#suivant1").addEventListener("click", suivant1);
    document.querySelector("#suivant2").addEventListener("click", suivant2);
    document.querySelector("#suivant3").addEventListener("click", suivant3);
    document.querySelector("#connexion").addEventListener("click", seConnecter);

    function suivant1() {
      etape1.style.display = "none";
      etape2.style.display = "block";
      etape3.style.display = "none";
      y.style.left = "-500px";
      register2.style.left = "50px";
    }
    function suivant2() {
      etape1.style.display = "none";
      etape2.style.display = "none";
      etape3.style.display = "block";
      y.style.left = "-500px";
      register2.style.left = "450px";
      register3.style.left = "50px";

    }


    function suivant3() {



      var isChecked = document.getElementById("myCheck").checked;

      if (isChecked) {
        Swal.fire({
          icon: 'success',
          title: 'Inscription validé !',
          text: 'Votre compte a été crée avec succès',
          footer: '<a href>Se connecter</a>'
        })
      }

      else {
        Swal.fire('Veuillez cocher la case pour continuer');
      }



    }


    function seConnecter() {

      var leMail = document.querySelector("#mail").value;

      var leMotdepasse = document.querySelector("#mdp").value;



      if (email == leMail && password == leMotdepasse) {
        let timerInterval
        Swal.fire({
          title: 'Connexion en cours',
          html: 'Processus terminé dans <b></b> millisecondes.',
          timer: 1000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          onClose: () => {
            clearInterval(timerInterval);
            Swal.fire({
              icon: 'succes',
              title: 'Vous êtes connecté',
            })
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      }
      else {
        let timerInterval
        Swal.fire({
          title: 'Connexion en cours',
          html: 'Processus terminé dans <b></b> millisecondes.',
          timer: 1000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          onClose: () => {
            clearInterval(timerInterval);
            Swal.fire({
              icon: 'error',
              title: 'Mot de passe ou adresse email invalide...',
            })
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      }


    }




    function inscription() {
      titreConnexion.style.left = "-400px";
      titreInscription.style.left = "50px";
      etape1.style.display = "block";
      etape2.style.display = "none";
      etape3.style.display = "none";
      etapes.style.right = "40px";
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    }
    function connexion() {
      titreConnexion.style.left = "50px";
      titreInscription.style.left = "450px";
      etape1.style.display = "none";
      etape2.style.display = "none";
      etape3.style.display = "none";
      etapes.style.right = "-40px";
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0px";
      register2.style.left = "-450px";
      register3.style.left = "-450px";
    }