const hargaBuku = [10000, 15000, 20000, 25000, 30000];
function totalHargaBuku(hargaBuku) {
  let total = 0; 
  for (let i = 0; i < hargaBuku.length; i++) {
    total += hargaBuku[i]; 
  }if (total > 150000) {
    console.log(`selamat anda mendapatkan diskon 15% : ${total * 0.15}`);
  }else {
    console.log(`total barang anda kurang dari 150.000`)
  }
  return total;
}
console.log(`Total harga buku: ${totalHargaBuku(hargaBuku)}`);