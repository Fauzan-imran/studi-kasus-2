const umurPasiean = [12 ,35 ,60, 45, 70];
function kategorikanPasien(umur) {
  for (let i = 0; i < umur.length; i++) {
    if (umur[i] >= 60) {
      console.log(`Pasien ${i + 1} dengan umur ${umur[i]} tahun mendapatkan antrea di kelas prioritas`);
    } else {
        console.log(`Pasien ${i + 1} dengan umur ${umur[i]} tahun mendapatkan antrea di kelas reguler`);
    }
  }
}
kategorikanPasien(umurPasiean);