const nama = ["faaiq", "hanun", "furqon", "fauzi", "farhan"];
const skor = [900, 850, 200, 700, 1000];
function skorTertinggi(nama, skor) {
    for (let i = 0; i < skor.length; i++) {
        if (skor[i] >= 900) {
            console.log(`Nama: ${nama[i]}, Skor: ${skor[i]} Gold tier`);
        } else if (skor[i] >= 700 && skor[i] < 900) {
            console.log(`Nama: ${nama[i]}, Skor: ${skor[i]} Silver tier`);
        } else {
            console.log(`Nama: ${nama[i]}, Skor: ${skor[i]} Bronze tier`);
        }
    }
}
skorTertinggi(nama, skor);