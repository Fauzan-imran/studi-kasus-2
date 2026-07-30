const jamKerja = [12, 9, 8, 7, 12];
function hitungGaji(jam) {
    let totalJam = 0;
    for (let i = 0; i < jam.length; i++) {
        totalJam += jam[i];
    }
    if (totalJam > 40) {
            gajiPerJam = (40 * 50000) + ((totalJam - 40) * 75000);
        } else {
            gajiPerJam = totalJam * 50000;
        }
    return gajiPerJam;
}
console.log(`Gaji yang diterima adalah ${hitungGaji(jamKerja)}`);