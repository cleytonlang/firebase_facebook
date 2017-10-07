# firebase_facebook
Aplicação Firebase com login usando Facebook.
<br><br>
Utilizei SDK Firebase, Jquery e Bootstrap 4 para criar um script de login com o facebook. <br>
Para rodar esta aplicação lembro que você precisa de um servidor. Ex: Apache, Xampp, Etc.
<br><br>
Você precisa criar sua aplicação no Firebase para setar as informações de config no initializeApp.
<br><br>

var config = {<br>
    apiKey: "AIzaSyCd7zlYr-T8F04fhH1kdKkbPlbNefsTal0",<br>
    authDomain: "peguei-ja.firebaseapp.com",<br>
    databaseURL: "https://peguei-ja.firebaseio.com",<br>
    projectId: "peguei-ja",<br>
    storageBucket: "peguei-ja.appspot.com",<br>
    messagingSenderId: "226205603020"<br>
};<br>
firebase.initializeApp(config);<br><br>

Altere os parâmentros do json config de acordo com sua conta no firebase.
Esta autenticação também cria o usuário do facebook no seu banco firebase.

<br><br>

Aproveite para explorar esta ferramenta excelente do Google.
https://firebase.google.com/


