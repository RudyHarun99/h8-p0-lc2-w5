/**
 * Buatlah sebuah program untuk membantu seorang organizer pertandingan sepak bola 
 * untuk mengalokasikan kursi kosong di stadium bagi pengunjungnya
 * Denah Stadium dalam bentuk array 2 dimensi. Masing-masing inner-array memiliki panjang yang sama dan angka ganjil. 
 * Dapat dipastikan bahwa panjang inner array SELALU ganjil.
 * 
 * Berikut definisi dari denah stadium :
 * Elemen di tengah dari inner-array merupakan tangga untuk pengunjung.
 * Elemen ' ' merepresentasikan kursi kosong atau tangga untuk pengunjung. 
 * Elemen '$' merepresentasikan kursi yang sudah di booking. 
 * Elemen '#' merepresentasikan kursi yang rusak
 * 
 * Jika kursi sudah di booking atau rusak maka tidak dapat di gunakan untuk pengunjung.
 * 
 * Program akan menerima input berupa stadium (dalam bentuk array 2 dimensi) dan jumlah pengunjung.
 * Jika jumlah pengunjung dapat diakomodasi oleh stadium, maka output: 'Kapasitas Stadium Cukup.'
 * Jika jumlah pengunjung tidak dapat diakomodasi oleh stadium, maka output: 'Stadium Overcapacity.'
 * 
 * Contoh INPUT, PROSES (illustrasi proses) dan OUTPUT nya :
 * --------------------------------------------------------------------------------------
 * INPUT: 
 * Param 1 (stadium)
 * [
 *   ['#', ' ', '$'],
 *   ['#', ' ', ' '],
 *   [' ', ' ', ' ']
 * ]
 * Param 2 (visitors) 
 * 3 
 * 
 * PROSES:             tangga
 *                       ⬇︎
 * lantai  1      ['#', ' ', '$']
 * lantai  2      ['#', ' ', ' ']   
 * lantai  3      [' ', ' ', ' ']
 *                       ⬆︎
 *                     tangga
 * 
 * - Ada 1 kursi rusak di lantai 1
 * - Ada 1 kursi yang sudah di booking di lantai 1
 * - Ada kursi rusak di lantai 2
 * - Ada 3 pengunjung dan kursi yang bisa diisi ada 3, sehingga cukup
 * 
 * OUTPUT: 
 * 'Kapasitas Stadium Cukup.'
 * -------------------------------------------------------------------------------------
 * 
 * RULES:
 * Dilarang menggunakan built-in function, kecuali:
 * - .push()
 * - .toUpperCase() dan .toLowerCase()
 * - Built-in for Math
 * - Built-in Informative (isNaN(), isArray(), isInteger)
 * - Built-in function yang mengubah type data ( string --> number / number --> string )
 * 
 * Asumsikan semua input pada test-case tidak ada invalid value (dipastikan bahwa input selalu array 2 dimensi dan angka)
 */

function calculateCapacity(stadium, visitors) {
  var hitung = 0;
  var tangga = stadium.length;
  for (var i = 0; i < stadium.length; i++) {
    for (var j = 0; j < stadium[i].length; j++) {
      if (stadium[i][j] == ' ') {
        hitung++;
      }
    }
  }
  var kapasitas = hitung - tangga;
  // console.log(kapasitas);
  if (kapasitas >= visitors) {
    return 'Kapasitas Stadium Cukup.';
  } else {
    return 'Stadium Overcapacity.';
  }
}


//Test Cases
console.log(
  calculateCapacity(
    [
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      ["$", "$", " ", "$", "$"]
    ],
    5
  )
); //Kapasitas Stadium Cukup.

console.log(
  calculateCapacity(
    [
      [" ", "#", " ", " ", " "],
      [" ", " ", " ", "#", " "],
      ["$", "$", " ", "$", "$"]
    ],
    8
  )
); //Stadium Overcapacity.

console.log(
  calculateCapacity(
    [
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "#"],
      [" ", "$", " ", " ", " "],
      ["$", "#", " ", "$", "$"],
      [" ", " ", " ", " ", " "],
      ["$", "$", " ", "$", "$"],
      ["$", "$", " ", "$", "$"]
    ],
    15
  )
); //Stadium Overcapacity.


console.log(
  calculateCapacity(
    [
      [' '],
      [' '],
      [' '],
      [' '],
      [' ']
    ],
    0
  )
) //Kapasitas Stadium Cukup.