const pointKalori = [200,400,550,300,100,250];
function totalKalori(points) {
    let total = 0;
    for (let i = 0; i < points.length; i++) {
        total += points[i];
    }   if (total > 2500) {
        console.log(`Anda telah melebihi batas kalori harian`);
    } else if (total === 2500) {
        console.log(`Anda telah mencapai batas kalori harian`);
    } else {
        console.log(`Anda belum mencapai batas kalori harian`);
    }
    return total;
}
console.log(`Total kalori yang dikonsumsi adalah ${totalKalori(pointKalori)} kalori`);