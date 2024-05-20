// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDzTc3JXXtNx3pZ-RoXcYw4aD_lXRJMmpQ",
    authDomain: "formularioprueba-7f1cf.firebaseapp.com",
    projectId: "formularioprueba-7f1cf",
    storageBucket: "formularioprueba-7f1cf.appspot.com",
    messagingSenderId: "63940359808",
    appId: "1:63940359808:web:ab0e987eca44b3ddc95865",
    measurementId: "G-YVX9P6WRPS"
  };

// Inicialización de Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos Firestore
const db = firebase.firestore();



document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()
    //base de dato
  


    //validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === "") {
        errorNombre.textContent = "por favor introduci tu nombre"
        errorNombre.classList.add("error-message");
    }else{
        errorNombre.textContent= ''
        errorNombre.classList.remove('error-message')
    }

    ///validar coreo electronico

    let emailEntrada =document.getElementById('email')
    let emailError =document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//patron de validacion
    
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent="por favor itroduce tu correo"
        emailError.classList.add('error-message')
    }else{
        emailError.textContent=""
        emailError.classList.remove('error-message')
    }

    //validar contraseña
    let contraseñaEntrada = document.getElementById('password')
    let contraseñaError = document.getElementById('passwordError')
    let contraseñaPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
   
   
    if(!contraseñaPattern.test(contraseñaEntrada.value) ){
        contraseñaError.textContent="la contraseña debe tener al menos 8 caracteres,numeros,mayusculas y minusculas y caracteres especiales"
        contraseñaError.classList.add('error-message')
    }else{
        contraseñaError.textContent=""
        contraseñaError.classList.remove('error-message')
    }

///si todos los campos son validos 
if(!errorNombre.textContent && !emailError.textContent && !contraseñaError.textContent ){

    db.collection("users").add({
        nombre: entradaNombre.value,
        emai: emailEntrada.value,
        contraseña:contraseñaEntrada.value
    })
    .then((docRef) => {
        alert("el formulariose ah enviado con exito",docRef.id)
        document.getElementById('formulario').reset()
        
    })
    .catch((error) => {
      alert(error)
    });
}


})

