const restoran = [true, false, true, true, false];
const rating = [4.5, 3.8, 4.2, 4.9, 3.5];
function cekRestoran(restoran, rating) {
  for (let i = 0; i < restoran.length; i++) {
    if (restoran[i] === true && rating[i] >= 4.5) {
      console.log(`Restoran ${i + 1} memiliki rating tinggi dan sedang buka`);
    } else if (restoran[i] === true && rating[i] < 4.5) {
      console.log(`Restoran ${i + 1} sedang buka tetapi ratingnya tidak tinggi`);
    } else {
      console.log(`Restoran ${i + 1} tidak sedang buka`);
    }
  }
}
cekRestoran(restoran, rating);