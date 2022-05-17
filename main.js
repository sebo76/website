

function alertbtn() {
    create_random_string(12);
    function create_random_string(string_length) {
    
        var random_string = '';
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
        
        for(var i, i  = 0; i < string_length; i++) {
            random_string += characters.charAt(Math.floor(Math.random() * characters.length ))
        }
        alert("Du hast ein Easteregg gefunden! Du erhältst 20% Rabatt 😍                         Hier dein Code: "+random_string);

    }


}
