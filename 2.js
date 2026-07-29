const IPK = [3.0, 4.5, 3.5, 2.5, 3.8];
const pendapatanOrangtua = [5000000, 7000000, 3000000, 2000000, 6000000];
function cekBeasiswa(IPK, pendapatanOrangtua) {
  for (let i = 0; i < IPK.length; i++) {
    if (IPK[i] >= 3.5 && pendapatanOrangtua[i] >= 5000000) {
      console.log(`Mahasiswa ke-${i + 1} lulus, dengan IPK ${IPK[i]} dan pendapatan orang tua ${pendapatanOrangtua[i]}`);
    } else {
      console.log(`Mahasiswa ke-${i + 1} tidak lulus`);
    }
  }
}
cekBeasiswa(IPK, pendapatanOrangtua);