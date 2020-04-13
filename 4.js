/*
 * ==========
 * Kapal Noah 
 * ==========
 * 
 * Ketika Noah sedang memasukkan seluruh binatang yang ada ke dalam kapalnya (disebut sebagai Noah's Ark), dia mendapatkan sebuah masalah. 
 * Dia memasukkan binatang-binatang tersebut dalam bentuk array of objects. Para binatang tidak terurut sehingga sulit untuk menempatkan mereka di dalam 
 * kapalnya.
 * Untuk itu, Noah mendapatkan sebuah ide untuk mengelompokkan mereka ke dalam oject dengan key huruf depan dari masing-masing binatang tersebut dan valuenya berupa
 * array berisi binatang yang huruf depannya sesuai dengan key tersebut. Hal ini dikarenakan masing-masing object yang merepresentasikan binatang bisa memiliki isi property yang berbeda-beda.
 * Cara ini akan mempermudah Noah untuk memasukkan binatang ke dalam kapal karena binatang-binatang tersebut sudah dikelompokkan berdasarkan alfabet.
 * 
 * Beginilah contoh output yang diharapkan:
 *  {
 *     a: [], b: [], ...
 *   }
 * PERHATIAN: Urutan key alfabet di dalam object tidak harus terurut, lihatlah contoh jawaban test-case
 * 
 * Rules:
 * Dilarang menggunakan built-in function, kecuali:
 * - .push()
 * - .toUpperCase() dan .toLowerCase()
 * - Built-in for Math
 * - Built-in Informative (isNaN(), isArray(), isInteger)
 * - Built-in function yang mengubah type data ( string --> number / number --> string )
 * 
 */

function groupArk(animals) {
	var binatang = [];
	for (var i = 0; i < animals.length; i++) {
		binatang.push(animals[i].nama[0]);
	}
	// console.log(binatang);

	var hapusGanda = [];
	for (var i = 0; i < binatang.length; i++) {
		var cek = 0;
		for (var j = 0; j < hapusGanda.length; j++) {
			if (binatang[i] == hapusGanda[j]) {
				cek = 1;
			}
		}
		if (cek == 0) {
			hapusGanda.push(binatang[i]);
		}
	}
	// console.log(hapusGanda);

	var objHasil = {};
	for (var i = 0; i < hapusGanda.length; i++) {
		objHasil[hapusGanda[i]] = [];
		for (var j = 0; j < animals.length; j++) {
			if (animals[j].nama[0] == hapusGanda[i]) {
				objHasil[hapusGanda[i]].push(animals[j]);
			}
		}
	}
	
	return objHasil;
}


console.log(groupArk([
	{ nama: 'ayam', spesies: '', kelamin: 'jantan' },
	{ nama: 'gajah', spesies: 'mammalia', umur: 20 },
	{ nama: 'anoa', umur: 10 },
	{ nama: 'lalat' },
	{ nama: 'laron', kelas: 'insecta' },
	{ nama: 'zebra', spesies: 'mammalia' }
]))
/**
 {
 a: [
   { nama: 'ayam', spesies: '', kelamin: 'jantan' },
   { nama: 'anoa', umur: 10 }
 ],
 g: [ { nama: 'gajah', spesies: 'mammalia', umur: 20 } ],
 l: [ { nama: 'lalat' }, { nama: 'laron', kelas: 'insecta' } ],
 z: [ { nama: 'zebra', spesies: 'mammalia' } ]
}
*/

console.log(groupArk([
	{ nama: 'ayam', species: '', kelamin: 'jantan' },
	{ nama: 'gajah', species: 'mammalia', umur: 20 },
	{ nama: 'anoa', umur: 10 },
	{ nama: 'lalat' },
	{ nama: 'laron', kelas: 'insecta' },
	{ nama: 'zebra', kelas: 'mammalia' },
	{ nama: 'gurita', jenis: 'cephalopoda' },
	{ nama: 'penyu belimbing', umur: 50 },
	{ nama: 'kura-kura', spesies: 'tetsudae' },
	{ nama: 'kuda', jenis: 'mammalia' }
]))

/**
 {
 a: [
   { nama: 'ayam', species: '', kelamin: 'jantan' },
   { nama: 'anoa', umur: 10 }
 ],
 g: [
   { nama: 'gajah', species: 'mammalia', umur: 20 },
   { nama: 'gurita', jenis: 'cephalopoda' }
 ],
 l: [ { nama: 'lalat' }, { nama: 'laron', kelas: 'insecta' } ],
 z: [ { nama: 'zebra', kelas: 'mammalia' } ],
 p: [ { nama: 'penyu belimbing', umur: 50 } ],
 k: [
   { nama: 'kura-kura', spesies: 'tetsudae' },
   { nama: 'kuda', jenis: 'mammalia' }
 ]
}
*
*/