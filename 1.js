/**
 * First in First Out (FIFO)
 *
 * Pada soal ini kalian diminta untuk membuat sebuah simulasi array yang merepresentasikan suatu queue (antrian).
 * Kalian akan diberikan sebuah array berisi nama-nama pengunjung sebagai input.
 * Dari urutan pengunjung ini, kalian harus membuat sebuah program yang akan mengembalikan orang pertama dalam queue dan sisa dari queue tersebut.
 *
 * Rules:
 * - Dilarang menggunakan built-in selain .push()
 * - Wajib menuliskan PSEUDOCODE!
 */

/*
PSEUDOCODE

SET queue as string
SET panggil as string

IF arr.length == 0
	RETURN 'Tidak ada orang dalam antrian.'
ELSE
	panggil equal arr[0];

	FOR i = 0; i < arr.length-1; i++
		IF i not equal arr.length-2
			queue += arr[i+1] + ', ' 
		ELSE
			queue += arr[i+1]
		ENDIF
	ENDFOR

	IF queue.length == 0
		RETURN `Orang yang berikutnya dipanggil : ${panggil}. Isi sisa antrian kosong.`
	ELSE
		RETURN `Orang yang berikutnya dipanggil : ${panggil}. Isi sisa antrian : ${queue}.`
	ENDIF
*/

function fifo(arr) {
	var queue = '';
	var panggil = '';

	if (arr.length == 0) {
		return 'Tidak ada orang dalam antrian.'
	} else {
		panggil = arr[0];

		for (var i = 0; i < arr.length-1; i++) {
			if (i !== arr.length-2) {
				queue += arr[i+1] + ', ';
			} else {
				queue += arr[i+1];
			}
		}
		
		if (queue.length == 0) {
			return `Orang yang berikutnya dipanggil : ${panggil}. Isi sisa antrian kosong.`
		} else {
			return `Orang yang berikutnya dipanggil : ${panggil}. Isi sisa antrian : ${queue}.`
		}
	}
}

console.log(fifo(["rifqy", "ariel", "ran", "sinichi", "rose"])); //Orang yang berikutnya dipanggil: rifqy. Isi sisa antrian:  ariel, ran, sinichi, rose.
console.log(fifo([])); //Tidak ada orang dalam antrian.
console.log(fifo(["rani"])); //Orang yang berikutnya dipanggil: rani. Isi sisa antrian kosong.
console.log(fifo(["ayu", "audrick"])); //Orang yang berikutnya dipanggil: ayu. Isi sisa antrian:  audrick.
