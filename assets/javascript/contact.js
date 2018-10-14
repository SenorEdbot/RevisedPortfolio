// Initialize Firebase
var config = {
    apiKey: "AIzaSyDc31TZWiSfh_3OhWQRimB98sZI2W67fkY",
    authDomain: "eddiefrancokubootcamp.firebaseapp.com",
    databaseURL: "https://eddiefrancokubootcamp.firebaseio.com",
    projectId: "eddiefrancokubootcamp",
    storageBucket: "eddiefrancokubootcamp.appspot.com",
    messagingSenderId: "295074090518"
};
firebase.initializeApp(config);
var database = firebase.database();
var contactRef = database.ref('contactRef');
var formName = $('#contactFormName');
var formEmail = $('#contactFormEmail');
var formMessage = $('#contactFormMessage');
var contactForm = $('#contactForm');

$(document).ready(function(){
    $('#formSubmit').on('click', function(){
        var contact = contactRef.push({
            Name: formName.val(),
            Email: formEmail.val(),
            Message: formMessage.val()
        });
        contactForm.trigger('reset');
    })
});