    $(function() {
        $('#mensagemderetorno').hide();
        var config = {
            apiKey: "AIzaSyCd7zlYr-T8F04fhH1kdKkbPlbNefsTal0",
            authDomain: "peguei-ja.firebaseapp.com",
            databaseURL: "https://peguei-ja.firebaseio.com",
            projectId: "peguei-ja",
            storageBucket: "peguei-ja.appspot.com",
            messagingSenderId: "226205603020"
        };
        firebase.initializeApp(config);

        $('#logar').click(function() {

            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('user_birthday');
            provider.setCustomParameters({
                'display': 'popup'
            });

            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user.displayName;

                $('#mensagemderetorno').html("Logado com sucesso").show();
                $('#nome').html(user);
                $('#foto').attr('src', result.user.photoURL);

            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                $('#mensagemderetorno').html("Erro codigo: " + errorCode + "<br>Mensagem: " + errorMessage).show();
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
            });
        });
    });