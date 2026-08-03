const daftarEmail = [
    "user1@example.com",
    "user2@examplecom",
    "user3example.com",
    "user4@example.com"
];
function validasiDaftarEmail(daftarEmail) {
    for (let i = 0; i < daftarEmail.length; i++){
        let email = daftarEmail[i];
        let apa = "";
        let iya = "";
        for (let a = 0; a < email.length; a++){
            if (email[a] == "@"){
                apa = email[a];
            }
            if (email[a] == "."){
                iya = email[a]
            }
        }
        if (apa == "@" && iya == "."){
            console.log(`${email} email valid`);
        } else {
            console.log(`${email} email tidak valid`);
        }
    }
}
validasiDaftarEmail(daftarEmail)