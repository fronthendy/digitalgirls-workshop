// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHarSn1Erk8Yfa9OoKb2E-WwWuNPiQAEI",
    authDomain: "instapartyapp.firebaseapp.com",
    databaseURL: "https://instapartyapp.firebaseio.com",
    projectId: "instapartyapp",
    storageBucket: "instapartyapp.appspot.com",
    messagingSenderId: "999434753841"
};
firebase.initializeApp(config);

var database = firebase.database();
let images = database.ref('images/');
images.on('value', function(snap){
    var listaImagens = snap.val();
    for(let imagem in listaImagens){
        $img = $(`<div class="item" style="background-image: url(${listaImagens[imagem]['urlPhoto']})"></div>`);
        $('.lista-imagens').append($img);
    }
})