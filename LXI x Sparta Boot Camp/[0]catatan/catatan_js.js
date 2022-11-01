console.log("tulisan umum")
console.error("pesan error")
console.warn("pesan peringatan")
console.info("informasi")

let nggak_diberi_nilai // nggak ada nilai, berarti undefined

console.log(nggak_diberi_nilai)
// hasil undefined

let angka = 123;
console.log(angka)
// hasil 123

let bernilai_null = null;
console.log(bernilai_null)
// hasil null
// berpengaruh di memory

let angka_float = 1.2 // ada titiknya.

// Kutip 1 atau 2 sama aja.
let data_string = "ayam"
let string_lain = 'ayam'

// Boolean, nilainya true dan false
let data_boolean = true
// nggak boleh pakai huruf besar
let boolean_salah = True 

// Ada yang nanya soal backtick
// Backtick lokasinya diatas TAB
let goreng = 'goreng'
let backtick = `ayam ${goreng}`;
console.log(backtick) 
//ayam goreng

// Bisa gabungin variabel dng cara lain
let var1 = "goreng";
let var2 = "ayam " + var1;
console.log(var2)
//ayam goreng

// ada const juga, variabelnya nggak bisa ganti nilai.

const const1 = "nilainya konstan"
const1 = "coba ubah nilai"
console.log(const1)
// Keluar uncaught type error

// Angka tapi string
let angka_string = "1";
let angka_int = 1;
console.log(angka_string)
console.log(angka_int)
// kelihatan bedanya di warna sih kalau di console.

// tapi bisa juga ngecek tipe datanya dengan typeof
console.log(typeof angka_string)
//string
console.log(typeof angka_int)
//number (float dan integer dimasukkin ke number)

const pie = 3.14;
const radius = 10;
const area = pie * (radius**2);
// kalau pakai ^ hasilnya jadi salah malah jadi 25.12 (ntah kenapa)
console.log(area)
//314

// ^ itu logika matematika XOR 

// Operasi matematika
// tambah +
// kurang -
// kali *
// bagi /

// Operasi logika
// AND &&
// OR || , namanya double pipe

// Operan dan operator
// operan itu yang diolah, misalnya angka.
// operator itu semacam + dll.

// Kalau di logika, operannya WAJIB boolean (true/false)

const boolean1 = true && false; // false
const boolean2 = false && false; // false
const boolean3 = true && true; // true
const boolean4 = true || true; // true
const boolean5 = true || false; // true
const boolean6 = false || false; // false

// Mendahulukan operasi matematika. Selalu dimulai dari kiri ke kanan.
let contoh_kurung = 1 + 2 * 3;
// bisa dikasih kurung
contoh_kurung = (1+2)*3;
console.log(contoh_kurung)
// 9

// Selector
const if_angka = 10;
// mau ngecek genap atau nggak
if (if_angka%2 == 0) {
    console.log("genap")
} else {
    console.log("ganjil")
}
// tetapi berjalan

// ada == dan ===
// kalau === tipe datanya harus ngepas
const if_string = "7";
if (if_string%2 === 0) {
    console.log("genap")
} else {
    console.log("ganjil")
}
// genap. ntah kenapa berhasil. Sepertinya karena module memaksa string menjadi angka. Sakti memang.

// contoh aneh
let if_angka2 = "ayam"%"asd"
console.log(if_angka2)
// NaN , artinya bukan angka

// if bisa tanpa else. Bisa juga pakai else if.
// console.log("A") kalau 81-100
// console.log("B") kalau 51-80
// console.log("C") kalau 0-50
const if_angka1 = 62;
if (81 <= if_angka1 && if_angka1 <= 100) {
    console.log("A")
} else if (51 <= if_angka1 && if_angka1 < 81) {
    console.log("B")
} else if (0 <= if_angka1 && if_angka1 < 51) {
    console.log("C")
} else {
    console.log("invalid score")
}

//    /$$                                                                
//   | $$                                                                
// /$$$$$$    /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$  /$$   /$$
// |_  $$_/   /$$__  $$ /$$__  $$| $$__  $$ /$$__  $$ /$$__  $$| $$  | $$
//   | $$    | $$$$$$$$| $$  \__/| $$  \ $$| $$$$$$$$| $$  \__/| $$  | $$
//   | $$ /$$| $$_____/| $$      | $$  | $$| $$_____/| $$      | $$  | $$
//   |  $$$$/|  $$$$$$$| $$      | $$  | $$|  $$$$$$$| $$      |  $$$$$$$
//    \___/   \_______/|__/      |__/  |__/ \_______/|__/       \____  $$
//                                                            /$$  | $$
//                                                           |  $$$$$$/
//                                                            \______/ 

// Pakai ? dan :

const ter_grade = 62
const grade = ter_grade >=81 && ter_grade <=100 
    ?'A'
    : ter_grade >=51 && ter_grade<81
        ?'B'
        : ter_grade >=0 && ter_grade<51
            ?'C'
            :'invalid score'
console.log(grade)

// Switch
const ter_gender = "Laki";
switch (ter_gender){
    case 'Laki':
        console.log("dia laki")
        // Kalau nggak ada break akan di lanjutkan kebawah sekalipun kondisi ini benar.
        break
    case 'perempuan':
        console.log("dia perempuan")
        break
    default:
        break
}
// switch juga nggak case sensitive. Jadi nanti bisa pakai tolowercase
console.log('AYAM'.toLowerCase())


// Escape
// Misalnya pakai kutip satu untuk string, tapi ada kutip satu di dalamnya. 
//contoh salah
// console.log('ayam d'besto');
//contoh benar
console.log('ayam d\'besto');
console.log("ayam d'besto")

//  /$$                                    
// | $$                                    
// | $$        /$$$$$$   /$$$$$$   /$$$$$$ 
// | $$       /$$__  $$ /$$__  $$ /$$__  $$
// | $$      | $$  \ $$| $$  \ $$| $$  \ $$
// | $$      | $$  | $$| $$  | $$| $$  | $$
// | $$$$$$$$|  $$$$$$/|  $$$$$$/| $$$$$$$/
// |________/ \______/  \______/ | $$____/ 
//                               | $$      
//                               | $$      
//                               |__/    

// For loop 
// Loop tau kapan berakhirnya. misalnya dibawah <= 10
for (let iterasi = 0; iterasi <= 10; iterasi++) {
    console.log('iterasi #' + iterasi)
}

// loop terbalik
for (let iterasi = 10; iterasi >=0; iterasi--){
    console.log('iterasi #' + iterasi)
}
// loop kalau genap
for (let iterasi = 0; iterasi <= 10; iterasi+=2) {
    console.log('iterasi #' + iterasi)
}

// While
// Kalau kondisi nya masih true, akan looping terus.
// Untuk kondisi yang kurang diketahui kapan berakhirnya.
let iterasi = 0;
while (iterasi <= 10){
    console.log('iterasi #' + iterasi)
    iterasi++;
}

// Do While
// ngecek kondisinya di akhir
iterasi = 0;
do {
    // dijalanin dulu baru cek kondisi di akhir
    console.log('iterasi #' + iterasi)
    iterasi++
} while (iterasi <=10)

// Loop kalau mau berhenti di kondisi yang diketahui pakai if 
iterasi = 0;
// while (true) akan jalan terus
while (true){
    if (iterasi > 10){
        break
    } 
    console.log('iterasi #' + iterasi)
    iterasi++
}

// if dan continue menghilangkan baris kode dibawah kalau sesuai kondisi
while (true){
    if (iterasi > 10){
        continue
        // misalnya i sudah sampai 11 jadinya iterasi dibawah nggak dilanjutin dan hasilnya masih ngelooping terus.
    } 
    console.log('iterasi #' + iterasi)
    iterasi++
}

// ngambil huruf ke sekian..
const ambil_huruf = "ayam goreng"
// ambil huruf g
console.log(ambil_huruf[5])
// g

//ngeprint setiap huruf
for (iterasi=0; iterasi <= ambil_huruf.length;iterasi++){
    console.log(ambil_huruf[iterasi])
}
// hasilnya nge print huruf 




