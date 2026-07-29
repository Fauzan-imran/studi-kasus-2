const platNomor = [1,3,2,4,8,5];
const tanggal = [2,3,14,22,9,32];
function cekGanjilGenap(platNomor, tanggal) {
  for (let i = 0; i < platNomor.length; i++) {
    if (platNomor[i] % 2 === 0 && tanggal[i] % 2 === 0) {
      console.log(`boleh masuk karena keduanya genap`);
    } else if (platNomor[i] % 2 !== 0 && tanggal[i] % 2 !== 0) {
      console.log(`boleh masuk karena keduanya ganjil`);
    } else {
      console.log(`tidak boleh masuk karena plat nomor dan tanggal tidak sama`);
    }
  }
}
cekGanjilGenap(platNomor, tanggal);