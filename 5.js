const id = ['a', 'b', 'c', 'd', 'e'] ;
const buku = [20, 15, 35, 10, 5] ;

function cekRestockGudang(id, buku) {
  for (let i = 0; i < id.length; i++) {
    if (buku[i] < 15) {
      console.log(`Barang dengan ID ${id[i]} perlu di-restock karena stok kurang dari 15`);
    } else {
      console.log(`Barang dengan ID ${id[i]} masih cukup`);
    }
  }
}
cekRestockGudang(id, buku);