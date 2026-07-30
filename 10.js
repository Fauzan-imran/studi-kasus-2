const daftarEmail = [
    "user1@example.com",
    "user2@examplecom",
    "user3example.com",
    "user4@example.com"
];
function validasiDaftarEmail(daftarEmail) {
    for (let i = 0; i < daftarEmail.length; i++){
        let email = daftarEmail.slice(0)
        let apa = 0;
        let iya = 0;
        for (let a = 0; a < email.length; i++){
            if (email[a] == "@"){
                apa = email[a];
            }
            if (email[a] == "."){
                iya = email[a]
            }
        }
        if (apa == "@" && iya == "."){
            console.log(`email valid`);
        } else {
            console.log(`email tidak valid`);
        }
    }
}
validasiDaftarEmail(daftarEmail)